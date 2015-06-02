// REQUIRE CONTROLLERS
var CustomerController = require('../server/controllers/customers.js'),
	DashboardController = require('../server/controllers/dashboard.js'),
	OrderController = require('../server/controllers/orders.js'),
	ProductController = require('../server/controllers/products.js'),
	SettingController = require('../server/controllers/settings.js');

// ROUTES
module.exports = function (app){
	
	// CustomerController
		// GET
		app.get('/getCustomers', function (req, res){
			console.log('> ROUTING REQUEST FOR getCustomers ...');
			CustomerController.getCustomers(req, res);
		});
		// POST
		app.post('/addCustomer', function (req, res){
			console.log('> ROUTING REQUEST FOR addCustomer ...');
			console.log('> \t req.body: ');
			console.log(req.body);
			CustomerController.addCustomer(req, res);
		});

	// DashboardController
		app.get('/getDashboardProducts', function (req, res){
			console.log('> ROUTING REQUEST FOR getDashboardProducts ...');
			res.json({ 'name': 'Track Shoes', 'quantity': 1 });
		});
	// OrderController
		// GET
		app.get('/getOrders', function (req, res){
			console.log('> ROUTING REQUEST FOR getOrders ...');
			// res.json({ 'orders': { 'name': 'Track Shoes', 'quantity': 1 }} );
			OrderController.getOrders(req, res);
		});
		// POST
		app.post('/addOrder', function (req, res){

			console.log('> ROUTING REQUEST FOR addOrder');
			OrderController.addOrder(req, res);
		});

	// ProductController
		// GET
		app.get('/getProducts', function (req, res){
			console.log('> ROUTING REQUEST FOR getProducts ...');
			ProductController.getProducts(req, res);
		});
		// POST
		app.post('/addProduct', function (req, res){
			console.log('> ROUTING REQUEST FOR addProducts ...');
			console.log(req.body);
			ProductController.addProduct(req, res);
		});

	// SettingController

}