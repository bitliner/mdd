'use strict';

/**
 * @ngdoc directive
 * @name mddApp.directive:mdd
 * @description
 * # mdd
 */
angular.module('mdd', [])
	.directive('mdd', function() {
		return {
			templateUrl: 'views/mdd.html',
			restrict: 'E',
			link: function postLink(scope, TypeUtils) {

				angular.extend(scope, TypeUtils);

				console.log('ola')



			}
		};
	});