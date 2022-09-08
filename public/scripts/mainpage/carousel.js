window.addEventListener('load', function () {
var listOfImage =document.querySelector("ul.listOfImagesInCarousel");
var totalImg = document.querySelectorAll("ul.listOfImagesInCarousel >li> img").length;
var imgWidth = document.querySelector("ul.listOfImagesInCarousel > li > img").offsetWidth + document.querySelector("ul.listOfImagesInCarousel > li > img").offsetLeft + document.querySelector("ul.listOfImagesInCarousel > li > img").offsetLeft;

console.log(imgWidth)
var autoPlayOn = false;
var currentShiftCount = 0;
var nextShiftCount = 0;

function inputImageDots(){
    for (var i = 0; i < totalImg; i++){
        const dot = document.createElement("div")
        dot.className = "dot";
        document.querySelector(".dotsContainer").appendChild(dot);
    }
    const totalDots = document.querySelectorAll(".dot");
    totalDots.forEach(function(dot , index){
        dot.addEventListener("click", function(){
            totalDots.forEach(function(dot){
                dot.classList.remove("dotActive");
            });
            dot.classList.add("dotActive");
            let currentShiftValue = -currentShiftCount * imgWidth;
            var imageShiftValue = index * -imgWidth;
            console.log(-currentShiftCount)
            console.log(index)
            listOfImage.animate([
                // keyframes
                { transform: 'translateX(' + currentShiftValue + 'px)' },
                { transform: 'translateX(' + imageShiftValue + 'px)' }

            ], {
                // timing options
                duration: 300,
                fill:"forwards"
            });
            currentShiftCount = index;
            autoPlayOn = false;
        })
    })
}

function preventOverflow(){

    if( nextShiftCount <= 0){
        nextShiftCount =  0;
    }
    else if( nextShiftCount >totalImg-1){
        nextShiftCount = totalImg-1 ;
    }
}

function autoPlay(){
    if(autoPlayOn){
        setInterval(()=>{
            if(autoPlayOn){
            next(); 
            }

        },3000);
    }
}



function next (){

    nextShiftCount += 1;
    preventOverflow();
    let currentShiftValue = -currentShiftCount * imgWidth;
    let nextShiftValue = -nextShiftCount * imgWidth;
    const totalDots = document.querySelectorAll(".dot");
    totalDots.forEach(function(dot){
        dot.classList.remove("dotActive");
    });
    totalDots[nextShiftCount].classList.add("dotActive");
    console.log(nextShiftCount)
    console.log(currentShiftCount)
    document.querySelector("ul.listOfImagesInCarousel").animate([
        // keyframes
        { transform: 'translateX(' + currentShiftValue + 'px)' },
        { transform: 'translateX(' + nextShiftValue + 'px)' }

    ], {
        // timing options
        duration: 300,
        fill:"forwards"
    });
    currentShiftCount = nextShiftCount;
    }
function prev (){

    nextShiftCount -= 1;
    preventOverflow();
    let currentShiftValue = -currentShiftCount * imgWidth;
    let nextShiftValue = -nextShiftCount * imgWidth;
    const totalDots = document.querySelectorAll(".dot");
    totalDots.forEach(function(dot){
        dot.classList.remove("dotActive");
    });
    totalDots[nextShiftCount].classList.add("dotActive");
    
    console.log(nextShiftCount)
    console.log(currentShiftCount)
document.querySelector("ul.listOfImagesInCarousel").animate([
    // keyframes
    { transform: 'translateX(' + currentShiftValue + 'px)' },
    { transform: 'translateX(' + nextShiftValue + 'px)' }

  ], {
    // timing options
    duration: 300,
    fill:"forwards"
  });
  currentShiftCount = nextShiftCount;
}


function start(){
    inputImageDots();
    document.querySelector(".nextButton").addEventListener("click",()=>{
        autoPlayOn = false;
        next();
    })
    document.querySelector(".prevButton").addEventListener("click",()=>{
        autoPlayOn = false;
        prev();
    })
    const totalDots = document.querySelectorAll(".dot");
    totalDots[0].classList.add("dotActive")
    autoPlay();
}


start();

  })