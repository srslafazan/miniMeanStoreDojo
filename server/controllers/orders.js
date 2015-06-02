// REQUIRE MONGOOSE, MODELS
var mongoose 	= require('mongoose'),
	Customer	= mongoose.model('Customer'),
	Order 		= mongoose.model('Order'),
	Product		= mongoose.model('Product');

var populate = require('mongoose-populator');

module.exports = (function(){
	return {
		getOrders: function (req, res){
			
			Order.find().exec(function (err, orders){
				populate(orders, '_customer product', function (err, populatedOrders){
					if (err){
						console.log(err);
					} else {
						res.json(populatedOrders);
					}
				});
			});
		},

		addOrder: function (req, res){

			Customer.findOne({ _id: req.body._customer }, function (err, customer){
				var order = new Order({ 
					'quantity': req.body.quantity, 
					'product': req.body.product, 
					'_customer': req.body._customer 
				});
				
				order._customer = customer._id;
				customer.orders.push(order);

				order.save(function (err, results){
					customer.save(function (err, results){
						populate(results, 'orders', function (err, populatedResults){
							if (err){
								console.log(err);
							} else {
								res.json(populatedResults);
							}
						});
					});
				});
			});
		},
	}
})();