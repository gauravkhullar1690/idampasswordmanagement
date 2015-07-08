function RegistrationController($scope, $compile, $http,dataService,$state) {

	$scope.formData = {};
	
	$scope.selfService = [];
	$scope.support = [];
	$scope.selfService1 = {};
	$scope.selfService2 = {};
	$scope.selfService3 = {};
	
	$scope.support1 = {};
	$scope.support2 = {};
	$scope.support3 = {};
	
	$scope.fromFirstPage = false;
	
	dataService.getQuestionList().then(
			function (result){
				$scope.selfService = result.data.selfService;
				$scope.support = result.data.support;
				// setting default values for self-service questions
				$scope.selfService1 = $scope.selfService[0];
				$scope.selfService2 = $scope.selfService[1];
				$scope.selfService3 = $scope.selfService[2];
				// setting default values for support questions
				$scope.support1 = $scope.support[0];
				$scope.support2 = $scope.support[1];
				$scope.support3 = $scope.support[2];
			}
	)

	$scope.processForm = function() {
		bootbox.alert("Your profile registered successfully",function(){
			if($scope.fromFirstPage){
				$state.go('login');
			} else{
				$state.go('home');
			}
		});
	};
	
	$scope.nextSection = function(){
		$scope.fromFirstPage = true;
		$state.go('registration.step1');
	}
}
