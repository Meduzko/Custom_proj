var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var DisplayAllRecords = require("../routes/DisplayAllRecords");
//var EditRecord = require("../routes/EditRecord");
var SaveRecord = require("../routes/SaveRecord");
var SaveAfterEdit = require("../routes/SaveAfterEdit");
var DeleteCustomer = require("../routes/DeleteCustomer");

app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/customer', DisplayAllRecords);//route customer list
//router.get('/customer/edit/:id', EditRecord);//edit customer route , get n post
router.post('/customer/add', SaveRecord);//route delete customer
router.post('/customer/edit/:id', SaveAfterEdit);
router.post('/customer/delete/:id', DeleteCustomer);
module.exports = router;