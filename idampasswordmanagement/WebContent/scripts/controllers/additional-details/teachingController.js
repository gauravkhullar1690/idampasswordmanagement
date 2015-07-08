function teachingController($scope,$compile,userServices) {

	$scope.saveInfo = function(userDetails) {
		userDetails.saveUserDetails(1,userDetails);
	};
	
	$scope.loadHtml = function(callback) {
		$
			.get(
					"htmls/additional-details/additional-details-right/teachingDetails.html",
					function(respons) {
						$scope.contents = respons;
						$(".teaching-details").html(
								$compile($scope.contents)($scope));
						if (typeof callback === 'function') {
							callback();
						}
				});
	};
	$scope.loadHtml();
}