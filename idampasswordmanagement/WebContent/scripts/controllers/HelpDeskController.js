function HelpDeskController($scope, $compile, $http,$state) {

	$scope.formData = {};
	
	$scope.ad = {};
	$scope.db = {};
	
	$scope.fromFirstPage = false;

	$scope.processForm = function() {


		var masterUser = {};
		masterUser.helpDesk = "true";
		masterUser.ad = $scope.ad.password;
		masterUser.db = $scope.db.password;

		$http.post('rest/user/resetPasswordIdAM', masterUser).success(
				function(data, status, headers, config) {
					$scope.ad.result = data.ad.status;
					$scope.ad.message = data.ad.msg;
					$scope.db.result = data.db.status;
					$scope.db.message = data.db.msg;
					$state.go('support-staff.result');
					
				}).error(function(data, status, headers, config) {
					$scope.ad.result = data.ad.status;
					$scope.ad.message = data.ad.msg;
					$scope.db.result = data.db.status;
					$scope.db.message = data.db.msg;
					$state.go('support-staff.result');
		});
	};
	
	$scope.generatePassword = function() {

		$http.get('rest/user/generateRandomPassword').success(
				function(data, status, headers, config) {
					$scope.ad.password = data.ad;
					$scope.db.password = data.db;
					$state.go('support-staff.ad');
					
				}).error(function(data, status, headers, config) {
					$scope.ad.password = data.ad;
					$scope.db.password = data.db;
					$state.go('support-staff.ad');
		});

	};
	
	$scope.goinside = function(){
		$scope.fromFirstPage = true;
		$state.go('support-staff.auth');
	};
	
	$scope.navigate = function(){
		if($scope.fromFirstPage){
			$state.go('login');
		} else{
			$state.go('home');
		}
	};
}
