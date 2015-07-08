function PasswordManagementController($scope, $compile,$state,dataService) {
	
	$scope.leftMenu = {};
	dataService.getPasswordLeftMenuItems().then(
			function (result){
				$scope.leftMenu = result.data;
				$scope.openItem(result.data.menuItems[0]);
			}			
	);	
	
	$scope.showChild = function(item) {
        return item.hasOwnProperty('child');
    }
	
	$scope.openItem = function(item) {
		if(item.id ==='ProfileRegistration'){
			$state.go('registration.step1');
		}else if(item.id ==='SelfServiceReset'){
			$state.go('self-service.ad');
		}else if(item.id ==='HelpDeskReset'){
			$state.go('support-staff.auth');
		}  
		else{
			$scope.loadHtml(item.html,"#password-management-right-work-area");
		}
		
    }
	
	$scope.loadHtml = function(htmlFile,selectorName,callback) {
		$
			.get(
					htmlFile,
					function(respons) {
						$scope.contents = respons;
						$(selectorName).html(
								$compile($scope.contents)($scope));
						if (typeof callback === 'function') {
							callback();
						}
				});
	};
}
