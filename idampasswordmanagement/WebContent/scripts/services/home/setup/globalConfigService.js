idamapp.service('globalConfigService', function($http) {
	
	this.getGridData = function() {
		
		return $http.get('/idampasswordmanagement/json/home/setup/configuration-parameters.json');	
		
	};
	
});