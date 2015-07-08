/************************************************************************
 * 
 * 	FileName	: states.js
 *  
 *  Description : Set up our mappings between URLs, templates, and 
 *  			  controllers.
 *  			  
 *  Revision History:
 *  ---------------------------------------------------------------------
 *  	DATE		 NAME			MODULE 			Changes
 *  ---------------------------------------------------------------------
 *  10-12-2013	Gorav Dhiman	Angular JS		 	Routes for app added		
 *  							Framework
 *  
 ************************************************************************/

/*******************************************************************************
 * Function : emailRouteConfig Description : This is to provide a routehandler
 * for all http request Inputs : Route Provider. Outputs :
 ******************************************************************************/
idamapp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	// route to show our basic form (/form)
	.state('login', {
		url : '/login',
		templateUrl : 'htmls/login/log-in.html',
		controller : 'LoginController'
	})

	// url will be /home
	.state('home', {
		url : '/home',
		templateUrl : 'htmls/home/home-page.html',
		controller : 'HomePageController'
	})

	// url will be /register
	.state('registration', {
		url : '/register',
		templateUrl : 'htmls/profile-register/profile-registration.html',
		controller : 'RegistrationController'
	})

	// url will be /register/auth
	.state('registration.auth', {
		url : '/auth',
		templateUrl : 'htmls/profile-register/profile-registration-auth.html'
	})

	// url will be /register/step1
	.state('registration.step1', {
		url : '/step1',
		templateUrl : 'htmls/profile-register/profile-registration-step1.html'
	})

	// url will be /register/step2
	.state('registration.step2', {
		url : '/step2',
		templateUrl : 'htmls/profile-register/profile-registration-step2.html'
	})

	// url will be /register
	.state('self-service', {
		url : '/self-service',
		templateUrl : 'htmls/reset-self-service/self-service.html',
		controller : 'SelfServiceController'
	})

	// url will be /register/auth
	.state('self-service.auth', {
		url : '/auth',
		templateUrl : 'htmls/reset-self-service/self-service-auth.html'
	})

	.state('self-service.auth2', {
		url : '/auth2',
		templateUrl : 'htmls/reset-self-service/self-service-auth2.html'
	})

	// url will be /register/step1
	.state('self-service.ad', {
		url : '/ad',
		templateUrl : 'htmls/reset-self-service/self-service-ad.html'
	})

	// url will be /register/step2
	.state('self-service.db', {
		url : '/db',
		templateUrl : 'htmls/reset-self-service/self-service-db.html'
	})

	.state('self-service.result', {
		url : '/result',
		templateUrl : 'htmls/reset-self-service/self-service-result.html'
	})
	// url will be /register
	.state('support-staff', {
		url : '/support-staff',
		templateUrl : 'htmls/reset-support-staff/support-staff.html',
		controller : 'HelpDeskController'
	})

	.state('support-staff.login', {
		url : '/login',
		templateUrl : 'htmls/reset-support-staff/support-staff-login.html'
	})

	// url will be /register/auth
	.state('support-staff.auth', {
		url : '/auth',
		templateUrl : 'htmls/reset-support-staff/support-staff-auth.html'
	})

	.state('support-staff.auth2', {
		url : '/auth2',
		templateUrl : 'htmls/reset-support-staff/support-staff-auth2.html'
	})

	// url will be /register/step1
	.state('support-staff.ad', {
		url : '/ad',
		templateUrl : 'htmls/reset-support-staff/support-staff-ad.html'
	})

	// url will be /register/step2
	.state('support-staff.db', {
		url : '/db',
		templateUrl : 'htmls/reset-support-staff/support-staff-db.html'
	})

	.state('support-staff.result', {
		url : '/result',
		templateUrl : 'htmls/reset-support-staff/support-staff-result.html'
	});

	// catch all route
	// send users to the form page 
	$urlRouterProvider.otherwise('/login');
});
