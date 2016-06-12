'use strict';

describe('Directive: MDD', function() {

  // load the directive's module
  beforeEach(module('mdd'));
  beforeEach(module('templates'));

  var element,
    scope;

  beforeEach(inject(function($rootScope, TypeUtils) {
    element = angular.element('<mdd></mdd>');
    scope = $rootScope.$new();
    angular.extend(scope, TypeUtils);
  }));

  describe('when data is an array of simple values', function() {

    
    beforeEach(inject(function($rootScope, TypeUtils) {
      scope.dd = [1, 2, 3, 4];
    }));

    it('should make hidden element visible', inject(function($compile) {


      element = $compile(element)(scope);
      scope.$digest();
      expect(element.find('li').length).toBe(4);
      expect(element.find('li').eq(0).text().trim()).toBe('1');
      expect(element.find('li').eq(1).text().trim()).toBe('2');
      expect(element.find('li').eq(2).text().trim()).toBe('3');
      expect(element.find('li').eq(3).text().trim()).toBe('4');

    }));
  });


});