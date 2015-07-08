function LoginController($scope, $rootScope, $cookieStore, $compile,
		commonService, loginService) {

	$rootScope.login = true;
	$scope.performLogin = function() {
		console.log($scope.form.masterUser.email);
		/*
		 * if (typeof ($cookieStore.get('collegediarycookie')) !== 'undefined') {
		 * var masterUser = { token : $cookieStore.get('collegediarycookie') };
		 * loginService.authenticateUser(masterUser); } else if (typeof
		 * ($scope.form) !== 'undefined') {
		 * loginService.authenticateUser($scope.form.masterUser); }
		 */
		loginService.authenticateUser($scope.form.masterUser);
	};

	$scope.forgotPassword = function() {
		var title = "Forgot Password";
		var message = "Please provide your email address we will send your New Password in some time";
		var html = "<input ng-model=forgotEmail class='forgotPassword bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' autofocus/>";
		var buttons = {
			danger : {
				label : "Send my Password",
				className : "btn-info",
				callback : function() {
					loginService.resetPassword($('.forgotPassword').val());
				}
			}
		};
		commonService.customDialog(title, message, html, buttons);
	};
}
