(function() {

	var productsController = function($scope, productsFactory) {

		var promise = productsFactory.getProducts();
		promise.success(function(data) {
			$scope.products = data;
		});

		$scope.addNewProducts = function() {

			var newProduct = {
					name: '',
					description: '',
					price: ''
				};

			if($scope.itemName != '' && $scope.itemDescription != '' && $scope.itemPrice != '') {

				newProduct.name = $scope.itemName;
				newProduct.description = $scope.itemDescription;
				newProduct.price = $scope.itemPrice;
				$scope.itemPrice = '';
				$scope.itemDescription = '';
				$scope.itemName = '';
				$scope.products.push(newProduct);
			} else {
				alert('Please fill in all blank!');
			}
		}
	}

	productsController.$inject = ['$scope', 'productsFactory'];

	angular.module('AngularSearchApp').controller('productsController', productsController);
}());