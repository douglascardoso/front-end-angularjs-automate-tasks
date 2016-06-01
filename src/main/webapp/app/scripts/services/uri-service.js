'use strict';

/**
 * @author Douglas Cardoso
 */
angular.module('cinqWebapp').service('UriService', [ '$log', function($log) {
	var service = this;

	service.getUri = function(str) {
		var parameters = str.split(':');
		var url = "rest" + parameters[1];
		return url;
	};
	
	return service;
} ]);