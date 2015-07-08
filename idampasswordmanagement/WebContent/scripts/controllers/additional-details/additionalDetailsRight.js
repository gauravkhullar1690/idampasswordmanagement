function additionalDetailsRight($scope, $compile) {
	$scope.loadHtml = function(callback) {
		$
			.get(
					"htmls/additional-details/additional-details-right/additional-details-right.html",
					function(respons) {
						$scope.contents = respons;
						$(".additional-details-right").html(
								$compile($scope.contents)($scope));
						if (typeof callback === 'function') {
							callback();
						}
				});
	};
	
	$scope.setAccordian = function(){
		$("#accordion").accordion({
			collapsible : true,
			heightStyle: "content"
		});
	};
	$scope.loadHtml($scope.setAccordian);
}
