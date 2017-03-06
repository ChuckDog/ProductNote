(function() {

	var deleteProductDirective = function() {

		return {

			restrict: 'C',
		    link: function (scope, elem, attrs) {
		        elem.bind('click', function(event) {
		            scope.products.splice(scope.$index, 1);
		            scope.$apply();
		        });
		    }
		}
	}

	angular.module('AngularSearchApp').directive('deleteProductDirective', deleteProductDirective);
}());