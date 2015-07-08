function additionalDetailsLeft($scope, $compile) {
	
	$scope.saveAdditionalInfo = function(){
		console.log("acs");
	};

	$scope.loadHtml = function(callback) {
		$
			.get(
					"htmls/additional-details/additional-details-left/additional-details-left.html",
					function(respons) {
						$scope.contents = respons;
						$(".additional-details-left").html(
								$compile($scope.contents)($scope));
						if (typeof callback === 'function') {
							callback();
						}
				});
	};

	$scope.setInfo = function(i, e) {
		$('#x').val(e.x1);
		$('#y').val(e.y1);
		$('#w').val(e.width);
		$('#h').val(e.height);
	};

	$scope.imageSetup = function() {
		var p = $("#uploadPreview");

		// prepare instant preview
		$("#uploadImage").change(
				function() {
					// fadeOut or hide preview
					p.fadeOut();

					// prepare HTML5 FileReader
					var oFReader = new FileReader();
					oFReader.readAsDataURL(document
							.getElementById("uploadImage").files[0]);

					oFReader.onload = function(oFREvent) {
						p.attr('src', oFREvent.target.result).fadeIn();
					};
				});

		$('img#uploadPreview').imgAreaSelect({
			aspectRatio : '1:1',
			onSelectEnd : $scope.setInfo
		});
	};

	$scope.loadHtml($scope.imageSetup);
}
