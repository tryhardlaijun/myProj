var path = require('path');
const express = require('express')
const ejs = require('ejs');
const port = 3000;
const app = express();
var _ = require('lodash');
app.set('view engine','ejs');
app.use(express.static('public'))



app.get('/', function(req, res){
    res.render("mainpage")
})


app.listen(port,() => {
    console.log("listening on port 3000")
})

