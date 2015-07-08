idamapp.service('userServices', function($http, $location
		, commonService) {
	
	this.saveUserDetails = function(masterUserId,userDetails) {
		userDetails.masterUser = {
			id : masterUserId
		};
		$http.post('rest/user/saveUserDetails', {
			userDetails : userDetails
		}).success(function(data, status, headers, config) {
			//$location.url('/additional-info');
		}).error(function(data, status, headers, config) {
			bootbox.alert("Unable to connect to server please try again later");
			//$location.url('/login');
		});
	};
});