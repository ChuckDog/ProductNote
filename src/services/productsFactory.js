(function() {

	var productsFactory = function($http) {

		return {

			getProducts: function() {

				return $http.get('JSONData/products.json');
			},

			setProducts: function(products) {

			}
		}
	};

	angular.module('AngularSearchApp').factory('productsFactory', productsFactory);
}());