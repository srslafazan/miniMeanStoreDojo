// CONTROLLERS

	// CustomerController
		storeApp.controller('CustomerController', function ($scope, CustomerFactory, OrderFactory, ProductFactory){
			// ON LOAD
			$scope.customers = [];

			CustomerFactory.getCustomers(function (customers){
				$scope.customers = customers;
				console.log($scope.customers); // CUSTOMERS FROM DB
				console.log('> ... CUSTOMERS RETURNED FROM FACTORY');
			});

			// ON PROMPT
			$scope.addCustomer = function (newCustomer){
				CustomerFactory.addCustomer(newCustomer, function (responseData){
					console.log('> ... addCustomer RESPONSE DATA FROM FACTORY: ');
					console.log(responseData);
					// address newCustomer addition to view
					$scope.newCustomer = {};
				});
			}

		});
	
	// DashboardController
		storeApp.controller('DashboardController', function ($scope, CustomerFactory, OrderFactory, ProductFactory){
			// ON LOAD
			$scope.dashboardProducts = [];

			ProductFactory.getDashboardProducts(function (dashboardProducts){
				$scope.dashboardProducts = dashboardProducts;
				console.log($scope.dashboardProducts);
				console.log('> ... dashboardProducts RETURNED FROM FACTORY');
			});

		});

	// OrderController
		storeApp.controller('OrderController', function ($scope, CustomerFactory, OrderFactory, ProductFactory){
			// ON LOAD
			$scope.orders = [];
			$scope.customers = [];
			$scope.products = [];

			OrderFactory.getOrders(function (orders){
				$scope.orders = orders;
				console.log($scope.orders); // ORDERS FROM DB
				console.log('> ... ORDERS RETURNED FROM FACTORY');
			});

			CustomerFactory.getCustomers(function (customers){
				$scope.customers = customers;
				console.log($scope.customers); // CUSTOMERS FROM DB
				console.log('> ... CUSTOMERS RETURNED FROM FACTORY');
			});

			ProductFactory.getProducts(function (products){
				$scope.products = products;
				console.log($scope.products); // PRODUCTS FROM DB
				console.log('> ... PRODUCTS RETURNED FROM FACTORY');
			});

			// ON PROMPT
			$scope.addOrder = function (newOrder){
				OrderFactory.addOrder(newOrder, function (responseData){
					console.log('> ... RETURNED FROM FACTORY AFTER addOrder');
					console.log(responseData);
					$scope.orders.push(responseData);
					$scope.newOrder = {};
				});
			}
		});
	
	// ProductController
		storeApp.controller('ProductController', function ($scope, CustomerFactory, OrderFactory, ProductFactory){
			// ON LOAD
			$scope.products = [];

			ProductFactory.getProducts(function (products){
				$scope.products = products;
				console.log($scope.products);
				console.log('> ... PRODUCTS RETURNED FROM FACTORY');
			});

			// ON PROMPT
			$scope.addProduct = function(newProduct){
				ProductFactory.addProduct(newProduct, function (responseData){
					console.log(responseData);
					console.log('> ... RETURNED FROM FACTORY AFTER addProduct');
					$scope.newProduct = {};
				});
			}
			// show more pending implementation
		});
	
	// SettingController