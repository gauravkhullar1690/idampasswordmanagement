function HomePageController($scope, $compile,topBarService,dataService) {
	
	// hide the Top bar
	//topBarService.hide();	
	
	$scope.tabs = [];
	dataService.getTabList().then(
		function(result){
			$scope.tabs = result.data;
			$scope.setDefaultTab($scope.tabs);
		}	
	)
	
	$scope.selectTab = function(htmlFile){
		$.get(htmlFile,
				function(respons) {
					$scope.contents = respons;
					$("#tab-work-area").html(
							$compile($scope.contents)($scope));
					if (typeof callback === 'function') {
						callback();
					}
			});	
	};
	
	$scope.setDefaultTab = function(data){
		var htmlFile = "htmls/home/tabs/PasswordManagement.html";
		$.each(data,function(index,value){
			if(value.default === true){
				htmlFile = value.html;
				return;
			}
		})
		$.get(htmlFile,
				function(respons) {
					$scope.contents = respons;
					$("#tab-work-area").html(
							$compile($scope.contents)($scope));
					if (typeof callback === 'function') {
						callback();
					}
			});	
	};
}
