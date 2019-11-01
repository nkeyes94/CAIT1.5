// * Importing required packages
var express = require("express");
var exphbs = require("express-handlebars");

// * PORT & App config
var PORT = 8080 || process.env.PORT;
var app = express();

// * Server listener
app.listen(PORT, function(){
    console.log("Application listening on localhost:"+ PORT);
});