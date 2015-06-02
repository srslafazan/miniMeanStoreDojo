// REQUIRE MONGOOSE, MODELS
var mongoose 	= require('mongoose'),
	Customer	= mongoose.model('Customer'),
	Order 		= mongoose.model('Order'),
	Product		= mongoose.model('Product');

module.exports = (function(){
	return {
		
		getCustomers: function (req, res){
			Customer.find({}, function (err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		getPopulatedCustomers: function (req, res){
			Customer.find().exec(function (err, customers){
				populate(customers, 'orders orders.product', function (err, populatedCustomers){
					if (err){
						console.log(err);
					} else {
						res.json(populatedCustomers);
					}
				});

			});
		},

		addCustomer: function (req, res){
			var customer = new Customer({ name: req.body.name });

			customer.save(function (err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},
	}
})();