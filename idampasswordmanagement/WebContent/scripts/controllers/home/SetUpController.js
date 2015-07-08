function SetUpController($scope, $compile,dataService) {
	
	$scope.leftMenu = {};
	dataService.getLeftMenuItems().then(
			function (result){
				$scope.leftMenu = result.data;
				$scope.openItem(result.data.menuItems[0]);
			}			
	);	
	
	$scope.showChild = function(item) {
        return item.hasOwnProperty('child');
    }
	
	$scope.openItem = function(item) {
		$scope.loadHtml(item.html,"#setup-right-work-area");
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
	
	$scope.myData = [{name: "Moroni", age: 50},
	                 {name: "Tiancum", age: 43},
	                 {name: "Jacob", age: 27},
	                 {name: "Nephi", age: 29},
	                 {name: "Enos", age: 34}];
	
	$scope.myData1 = [{name: "Gaurav", age: 50},
	                 {name: "Gaurav2", age: 43},
	                 {name: "Jacob", age: 27},
	                 {name: "Nephi", age: 29},
	                 {name: "Enos", age: 34}];
	
	$scope.gridOptions = { data: 'myData' };
	$scope.gridOptions1 = { data: 'myData1' };
}
