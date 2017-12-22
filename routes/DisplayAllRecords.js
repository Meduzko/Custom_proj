var express = require('express');
var app = express();
var connection = require('../routes/connection.js').localConnect();


module.exports = function DisplayAllRecords(req , res , next){
    connection.query('select * from actor',function(err, results, fields){
        if(err) {
        	console.log("Error Selecting : %s ",err);
        } else {
        	res.json(results);
        	console.log("DisplayAllRecords worked");
        }
            
        })


};