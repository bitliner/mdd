angular.module('mdd').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('mdd.html',
    "\n" +
    "\n" +
    "<!-- ARRAY -->\n" +
    "<div ng-if=\"isArray(data)\">\n" +
    "	<div ng-repeat=\"d in data\">\n" +
    "		<mdd data=\"d\"></mdd>\n" +
    "	</div>\n" +
    "	<hr>\n" +
    "</div>\n" +
    "\n" +
    "<!-- SINGLE OBJECT -->\n" +
    "<div ng-if=\"isComplexObject(data)\">\n" +
    "	<div ng-repeat=\"(key,value) in data\">\n" +
    "		{{unCamelCase(key)}} \n" +
    "		<br>\n" +
    "		<mdd data=\"value\"></mdd>	\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- SIMPLE VALUE -->\n" +
    "<p ng-if=\"isSimpleValue(data)\">\n" +
    "	{{data}}	\n" +
    "</p>"
  );

}]);
