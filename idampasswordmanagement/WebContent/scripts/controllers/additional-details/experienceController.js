function experienceController($scope,$compile,userServices) {

	$scope.saveInfo = function(userDetails) {
		userDetails.saveUserDetails(1,userDetails);
	};
	
	$scope.loadHtml = function(callback) {
		$
			.get(
					"htmls/additional-details/additional-details-right/experienceDetails.html",
					function(respons) {
						$scope.contents = respons;
						$(".experience-details").html(
								$compile($scope.contents)($scope));
						if (typeof callback === 'function') {
							callback();
						}
				});
	};
	$scope.loadHtml();
}