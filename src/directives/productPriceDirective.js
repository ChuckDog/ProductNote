(function() {

	var productPriceDirective = function() {

		return {

			restrict: 'C',
		    link: function (scope, elem, attrs) {
		        elem.bind('click', function(event) {
		            if(attrs.$$element.parent().parent().hasClass('addPriceBackground')) {
		            	attrs.$$element.parent().parent().removeClass('addPriceBackground');
		            } else {
		            	attrs.$$element.parent().parent().addClass('addPriceBackground');
		            }
		        });
		    }
		}
	}

	angular.module('AngularSearchApp').directive('productPriceDirective', productPriceDirective);
}());