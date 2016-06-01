'use strict';

/**
 * @author Douglas Cardoso
 */
angular.module("cinqWebapp").service("PeopleService", [ '$log', 'UriService', 'RequestService', function($log, UriService, RequestService) {
	var service = this;

	service.getPeople = function() {
		var url = UriService.getUri("engine:/people");
		$log.debug('Request', url);
		return RequestService.doRequest(url, null, 'GET');
	};
	
	return service;

} ]);