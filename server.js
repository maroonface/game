/**
 * Created by maroonface on 27/8/16.
 */
var express = require('express');
var app = express();

app.use('/',express.static( __dirname + '/public'));

app.listen(8888,function(){
    console.log("Server si up and running at: 8888");
});