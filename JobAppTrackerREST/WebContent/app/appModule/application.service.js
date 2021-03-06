angular.module('appModule')
	.factory('appService', function($http, authService){
		var service = {};
		
		service.index = function(){
			var uid = authService.getToken().id;
			return $http({
				method: 'GET',
				url: 'rest/user/' + uid + '/app'
			});
		};
		
		service.show = function(aid){
			var uid = authService.getToken().id;
			return $http({
				method: 'GET',
				url: 'rest/user/' + uid + '/app/' + aid
			});
		};
		
		service.create = function(app){
			var uid = authService.getToken().id;
			return $http({
				method: 'POST',
				url: 'rest/user/' + uid + '/app',
				headers: {
					'Content-Type': 'application/json'
				},
				data: app
			});
		};
		
		service.update = function(app){
			var uid = authService.getToken().id;
			return $http({
				method: 'PUT',
				url: 'rest/user/' + uid + '/app/' + app.id,
				headers: {
					'Content-Type': 'application/json'
				},
				data: app
			});
		};
		
		service.destroy = function(app){
			var uid = authService.getToken().id;
			return $http({
				method: 'DELETE',
				url: 'rest/user/' + uid + '/app/' + app.id,
			});
		};
		
		return service;
	});