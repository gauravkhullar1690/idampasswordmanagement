idamapp.service('dataService', function($http) {
	
	this.getTabList = function() {
		
		return $http.get('/idampasswordmanagement/json/home/tab-list.json');	
		
	};
	
	this.getLeftMenuItems = function() {
		
		return $http.get('/idampasswordmanagement/json/home/setup-left-menu.json');	
		
	};
	
	this.getPasswordLeftMenuItems = function() {
			
			return $http.get('/idampasswordmanagement/json/home/password-left-menu.json');	
			
	};
	
	this.getReportLeftMenuItems = function() {
		
		return $http.get('/idampasswordmanagement/json/home/report-left-menu.json');	
		
	};
	
	this.getDashboardsLeftMenuItems = function() {
		
		return $http.get('/idampasswordmanagement/json/home/dashboard-left-menu.json');	
		
	};
	
	this.getConfigurationParameters = function() {
		
		return $http.get('/idampasswordmanagement/json/home/configuration-parameters.json');	
		
	};
	
	this.getQuestionList = function() {
		
		return $http.get('/idampasswordmanagement/json/home/question-list.json');	
		
	};
	
	this.AttemptedVsSuccessReset = function() {
		
		return $http.get('/idampasswordmanagement/json/home/dashboards/attempted-vs-success-reset.json');	
		
	};
	
	this.LoginFailure = function() {
		
		return $http.get('/idampasswordmanagement/json/home/dashboards/login-failure.json');	
		
	};
	
	this.MonthlyPasswordReset = function() {
		
		return $http.get('/idampasswordmanagement/json/home/dashboards/monthly-password-reset.json');	
		
	};
	
	this.PasswordResetDrillDown = function() {
		
		return $http.get('/idampasswordmanagement/json/home/dashboards/password-reset-drill-down.json');	
		
	};
	
});