// REQUIRE MONGOOSE, MODELS
var mongoose 	= require('mongoose'),
	Customer	= mongoose.model('Customer'),
	Order 		= mongoose.model('Order'),
	Product		= mongoose.model('Product');

module.exports = (function(){
	return {
		getProducts: function (req, res){
			Product.find({}, function (err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		addProduct: function (req, res){
			var product = new Product(req.body);
			
			product.save(function (err, results){
				if(err){
					console.log(err);
				} else {
					console.log('> ADDED ' + req.body.name + ' TO PRODUCTS');
					res.json(results);
				}
			});

		},
	}
})();