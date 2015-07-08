idamapp.service('loginService', function($http, $state,
		$cookieStore, commonService) {
	this.authenticateUser = function(matserUser) {
		$state.go('home')
		/*$http.post('rest/user/authenticateUser', {
			masterUser : matserUser
		}).success(
				function(data, status, headers, config) {
					if (commonService.ifNotEmptyAndNotNull(data) && data !== 'FAILURE') {
						$cookieStore.put('collegediarycookie', data);
						$location.url('/home');
					} else if (commonService.ifNotEmptyAndNotNull(data)) {
						$location.url('/login');
						bootbox.alert("Please check emailId or password");
					} else {
						$location.url('/login');
					}
				}).error(function(data, status, headers, config) {
			// Handle the error
		});*/
	};

	this.resetPassword = function(email) {
		$http.get('rest/user/resetPassword?email=' + email).success(
				function(data, status, headers, config) {
					bootbox.alert(data);
				}).error(function(data, status, headers, config) {
			bootbox.alert(data);
		});
	};
});