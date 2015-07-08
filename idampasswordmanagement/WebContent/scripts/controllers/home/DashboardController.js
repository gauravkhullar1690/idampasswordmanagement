function DashboardController($scope, $compile, dataService) {

	$scope.leftMenu = {};
	dataService.getDashboardsLeftMenuItems().then(function(result) {
		$scope.leftMenu = result.data;
		$scope.openItem(result.data.menuItems[0]);
	});

	$scope.showChild = function(item) {
		return item.hasOwnProperty('child');
	}

	$scope.openItem = function(item) {
		//$scope.loadHtml(item.html, "#dashboard-right-work-area");
		if (item.id === 'PasswordResetSystemWise') {
			var src = 'http://localhost:9090/idampasswordmanagement/samples/Dashboards/Dashboards/PasswordReset-DrillDown.html'
			$("#dashboard-right-work-area")
					.html(
							'<iframe src="'
									+ src
									+ '" style="zoom:0.60" width="99.6%" height="900" frameborder="0"></iframe>')
		} else {
			$scope.loadHtml(item.html, "#dashboard-right-work-area");
		}
	}

	$scope.loadHtml = function(htmlFile, selectorName, callback) {
		$.get(htmlFile, function(respons) {
			$scope.contents = respons;
			$(selectorName).html($compile($scope.contents)($scope));
			if (typeof callback === 'function') {
				callback();
			}
		});
	};
}
