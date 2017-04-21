//Found this on gitHub- from NathanNenga
var app = require('/index');
var db = app.get('db');

module.exports = {
  createProduct: function(req, res){
    name = req.body.name;
    desription = req.body.description;
    price = req.body.price;

//Below, I don't understand
    // db.create_product([name, description, price], function(err){
    //   console.log(err);
    // })
  }
}
