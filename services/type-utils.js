'use strict';


/**
 * @ngdoc service
 * @name brandDashboardApp.analytics
 * @description
 * # analytics
 * Service in the brandDashboardApp.
 */
angular.module('mdd')
	.service('TypeUtils', function() {


		return {
			isSimpleValue: function(val) {
				console.log('!!!--->', typeof val === 'string' || typeof val === 'number')
				return typeof val === 'string' || typeof val === 'number'|| val instanceof Date;
			},
			isArray: function(val) {
				return Array.isArray(val);
			},
			isComplexObject: function(val) {
				return !Array.isArray(val) && typeof val === 'object' && !(val instanceof Date);
			}
		}
	});