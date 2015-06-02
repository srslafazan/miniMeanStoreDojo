// FACTORY
	
	// CustomerFactory
		storeApp.factory('CustomerFactory', function ($http){
			var factory = {};
			var customers = [];

			factory.getCustomers = function (callback){
				console.log('> REQUESTING CUSTOMERS FROM SERVER ...');
				$http.get('/getCustomers').success(function (response){
					callback(response);
				});
			}

			factory.addCustomer = function (newCustomer, callback){
				console.log('> POSTING newCustomer: ... ');
				console.log(newCustomer);
				console.log(' ... TO SERVER ...');
				$http.post('/addCustomer', newCustomer).success(function (response){
					callback(response);
				});
			}

			return factory;
		});
	// OrderFactory
		storeApp.factory('OrderFactory', function ($http){
			var factory = {};
			var orders = [];

			factory.getOrders = function (callback){
				console.log('> REQUESTING ORDERS FROM SERVER ...');
				$http.get('/getOrders').success(function (response){
					callback(response);
				});
			};

			factory.addOrder = function (newOrder, callback){
				console.log('> REQUESTING addOrder FROM SERVER ...');
				console.log(newOrder);
				
				$http.post('/addOrder', newOrder).success(function (response){
					callback(response);
				});
			}

			return factory;
		});
	// ProductFactory
		storeApp.factory('ProductFactory', function ($http){
			var factory = {};
			var customers = [];

			factory.getProducts = function (callback){
				console.log('> REQUESTING PRODUCTS FROM SERVER ...');
				$http.get('/getProducts').success( function (response){
					callback(response);
				});
			}

			factory.getDashboardProducts = function (callback){
				console.log('> REQUESTING dashboardProducts FROM SERVER ...');
				$http.get('/getDashboardProducts').success(function (response){
					callback(response);
				});
			}

			factory.addProduct = function (newProduct, callback){
				console.log('> REQUESTING addProduct FROM SERVER ...');
				$http.post('/addProduct', newProduct).success(function (response){
					callback(response);
				});
			}

			return factory;
		});