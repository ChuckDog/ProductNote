(function() {

	var app = angular.module('AngularSearchApp', ['ngRoute']);

	app.config(function($routeProvider) {

		$routeProvider
			.when('/allProducts', {
				controller: 'productsController',
				templateUrl: 'src/views/productsTemplate.html'
			})
			.otherwise({
				redirectTo: '/allProducts'
			});
	});
}());