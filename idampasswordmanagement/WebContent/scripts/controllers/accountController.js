function accountController($scope) {
	$scope.role = 'Admin';
	$scope.IsAdmin = function(){
		return false;
	}
	
	$scope.IsManager = function(){
		return false;
	}
	
	$scope.IsUser = function(){
		return true;
	}
}
