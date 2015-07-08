function educationController($scope,$compile,userServices) {

	$scope.saveInfo = function(userDetails) {
		userDetails.saveUserDetails(1,userDetails);
	};
	
	$scope.addMoreEduction = function(first) {
		if(typeof $scope.form.education !== 'undefined'){
			if(first){
				$scope.form.educationDetails = [];
			}
			$scope.form.educationDetails.push({
				type : '',
				institute : '',
				year : ''
			});
		}
	};
	
	$scope.removeEduction = function(index) {
	    $scope.form.educationDetails.splice(index, 1);
	};
	
	$scope.saveEducationDetails = function() {
		var eductionalDetails = new Object(); 
		eductionalDetails =	$scope.form.educationDetails;
		eductionalDetails.push($scope.form.education);
		alert(JSON.stringify(eductionalDetails));
	};
	
	$scope.loadHtml = function(callback) {
		$
			.get(
					"htmls/additional-details/additional-details-right/educationDetails.html",
					function(respons) {
						$scope.contents = respons;
						$(".education-details").html(
								$compile($scope.contents)($scope));
						if (typeof callback === 'function') {
							callback();
						}
				});
	};
	$scope.loadHtml();
}