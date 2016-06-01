'use strict';

/**
 * @author Douglas Cardoso
 */
angular.module('cinqWebapp', [ 'ngCookies', 'ngRoute', 'pascalprecht.translate']).config(
		[ '$translateProvider', '$routeProvider', '$httpProvider', function($translateProvider, $routeProvider, $httpProvider) {
			$routeProvider.when('/people', {
				templateUrl : 'app/views/people/people.html',
				controller : 'PeopleCtrl',
				allowAnonymous : true
			}).otherwise({
				redirectTo : '/people'
			});
		
			$translateProvider.useSanitizeValueStrategy(null);
		 	$translateProvider.preferredLanguage('en');
		 	$translateProvider.useStaticFilesLoader({
		 		prefix : 'app/i18n/locale-',
		 		suffix : '.json'
		 	});	
		 	$translateProvider.useLocalStorage();

		} ]);