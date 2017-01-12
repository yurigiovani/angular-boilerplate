require('angular');
require('angular-route');
require('angular-material');
require('ng-cordova');
require('./locale/angular-locale_pt-br');

//
const 	configValue 					= 	require('./config/configValue'),
		configConstant 					= 	require('./config/configConstant'),
		routeConfig 					= 	require('./config/routeConfig'),
		SampleService					=	require('./services/SampleService'),
		SampleController 				= 	require('./controllers/SampleController');

angular.module('app', ['ngRoute', 'ngCordova', 'ngMaterial'])
	   .config(function($mdThemingProvider) {
	   		// $mdThemingProvider.theme('default').backgroundPalette('blue-grey');
	   });

angular.module('app')
		.value('configValue', configValue);

angular.module('app')
		.config(['$routeProvider', routeConfig]);

// SERVICES are called here
angular.module('app')
		.service('SampleService', ['$mdToast', '$filter', SampleService]);

// CONTROLLERS are called here
angular.module('app')
		.controller('SampleController', ['$scope', '$http', '$filter', 'configValue', 'routeInfo', SampleController]);

// FILTERS are called here
// angular.module('app')
		// .filter('adjust', filterSample);