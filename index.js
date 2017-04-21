var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectString = "postgres://postgres:jesus555@localhost:5433/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectString});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
//We get our db out of the app
var db = app.get('db');

//This works by looking in the db folder in our app for a file called new_plane.sql
db.new_plane(function(err, planes){
  console.log(err, "plane added")
});

//This function was changed to refer to the controller
//This makes it so that the table is there right off the bat
var controller = require('./controller.js');
//This is for a bonus POST I found from someone's gitHub

//  UNCOMMENT THIS
// var productCtrl = require('./productCtrl.js');

controller.getPlanes();

//AND THIS
// app.post('/api/product', productCtrl.createProduct);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
