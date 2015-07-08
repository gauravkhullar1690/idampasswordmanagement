function ReportController($scope, $compile, dataService) {

	$scope.leftMenu = {};
	dataService.getReportLeftMenuItems().then(function(result) {
		$scope.leftMenu = result.data;
		$scope.openItem(result.data.menuItems[0]);
	});

	$scope.showChild = function(item) {
		return item.hasOwnProperty('child');
	}

	$scope.openItem = function(item) {
		$("#report-right-work-area")
				.html(
						'<iframe src="'
								+ item.src
								+ '" style="zoom:0.60" width="99.6%" height="1600px" frameborder="0"></iframe>')
	}
}
