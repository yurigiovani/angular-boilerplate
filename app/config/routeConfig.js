module.exports = function($routeProvider) {

	$routeProvider
		.when('/sample', {
			templateUrl: 'views/sample.html',
			controller: 'SampleController',
			resolve: {
				routeInfo: function() {
					return {
						routeName: "Sample"
					}
				}
			}
		});

	$routeProvider.otherwise({
		redirectTo: "/sample"
	});

};