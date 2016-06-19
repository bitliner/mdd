'use strict';

/**
 * @ngdoc directive
 * @name mddApp.directive:mdd
 * @description
 * # mdd
 */
angular.module('mdd', [])
	.directive('mdd', function(TypeUtils) {
		return {
			scope:{
				data:'='
			},
			templateUrl: 'views/mdd.html',
			restrict: 'E',
			link: function postLink(scope) {

				angular.extend(scope, TypeUtils);

				console.log('ola')



			}
		};
	})
	.directive('mddArray', function(TypeUtils) {
		return {
			scope:{
				data:'='
			},
			templateUrl: 'views/mdd-array.html',
			restrict: 'E',
			link: function postLink(scope) {

				angular.extend(scope, TypeUtils);

				console.log('Array')



			}
		};
	})
	.directive('mddObject', function(TypeUtils) {
		return {
			scope:{
				data:'='
			},
			templateUrl: 'views/mdd-object.html',
			restrict: 'E',
			link: function postLink(scope) {

				angular.extend(scope, TypeUtils);

				console.log('Object')



			}
		};
	})
	.directive('mddSimpleValue', function(TypeUtils) {
		return {
			scope:{
				data:'='
			},
			templateUrl: 'views/mdd-simple-value.html',
			restrict: 'E',
			link: function postLink(scope) {

				angular.extend(scope, TypeUtils);

				console.log('SimpleValue')



			}
		};
	});