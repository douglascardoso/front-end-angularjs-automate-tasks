'use strict';

/**
 * @author Douglas Cardoso
 */
(function() {

	angular.module('cinqWebapp').controller('PeopleCtrl', ['$scope', 'PeopleService', function($scope, PeopleService) {
		
		$scope.people = [];
		
		PeopleService.getPeople().then(function(response){
			$scope.people = response.data;
		});
		
	}]);
})();