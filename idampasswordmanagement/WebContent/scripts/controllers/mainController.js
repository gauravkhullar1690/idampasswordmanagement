var idamapp = angular.module('idam', ['ngCookies','ngGrid','ngAnimate', 'ui.router','ui.bootstrap','ng-fusioncharts'
]).run(function($rootScope) {
    $rootScope.login = false;
})
