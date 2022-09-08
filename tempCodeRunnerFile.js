


app.get('/', function(req, res){
    res.render("mainpage")
})


app.listen(port,() => {
    console.log("listening on port 3000")
})
