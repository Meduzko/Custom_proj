var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const mysql = require('mysql2');
app.use(express.static('.'));

var routes = require('./routes/index');
var router = express.Router();


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
//app.use(expressValidator());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'sakila'
});



app.get('/list', function(req, res) {
   //res.sendfile('index.html');
   connection.query('SELECT * FROM actor',function(err, results, fields) {
  	if (err) {
  		console.log(err);
  	} else {
  		res.json(results);
  	}
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);
});


app.post('/addlist', function(req, res) {
  JSON.stringify(req.body);
	/*
	connection.query(
		'insert into actor (actor_id, first_name, last_name, last_update) values()')
    */
   console.log(req.body);
})




//app.get('/examples/:project/:func', require('./examples'));

/*
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Examples app listening at http://%s:%s', host, port);
});
*/

app.use('/', routes);


module.exports = app;
app.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:300/');