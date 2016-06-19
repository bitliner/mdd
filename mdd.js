'use strict';

/**
 * @ngdoc directive
 * @name mddApp.directive:mdd
 * @description
 * # mdd
 */
angular.module('mdd', [])
	.directive('mdd', function(TypeUtils, ObjectUtils) {
		return {
			scope: {
				data: '='
			},
			templateUrl: 'mdd.html',
			restrict: 'E',
			link: function postLink(scope) {

				angular.extend(scope, TypeUtils);
				angular.extend(scope, ObjectUtils);

				console.log('ola')



			}
		};
	});
