// CONFIG
var storeApp = angular.module('storeApp', ['ngRoute']);

storeApp.config( function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/products',{
		templateUrl: 'partials/products.html'
	})
	.when('/orders',{
		templateUrl: 'partials/orders.html'
	})
	.when('/customers',{
		templateUrl: 'partials/customers.html'
	})
	.when('/settings',{
		templateUrl: 'partials/settings.html'
	})
});