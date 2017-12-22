var express = require('express');
var app = express();
var connection = require('../routes/connection.js').localConnect();
var bodyParser = require('body-parser');





//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));



module.exports = function EditRecord(req , res , next){
    var id = req.params.id;
    JSON.stringify(req.body);
    console.log(req.body);
    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        actor_id    : input.actor_id,
        first_name : input.first_name,
        last_name   : input.last_name,
        last_update   : input.last_update

    };

    console.log(id);
    //console.log(req.query.first_name);
    connection.query('SELECT * FROM actor WHERE actor_id = ?',[id],function(err, results, fields){
    if(err) {
    	console.log("Error Selecting : %s ",err );
    }else {
    	res.json(results);
        console.log("Edit record worked");
    }
        
    });

}