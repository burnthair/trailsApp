var app = angular.module('trailModule');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: 'partials/home.html'
    })
    .when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'partials/home.html'
    })
    .when('/input', {
      controller: 'inputCtrl',
      templateUrl: 'partials/input.html'
    })
    .when('/output', {
      controller: 'outputCtrl',
      templateUrl: 'partials/output.html'
    })
    .otherwise({ redirectTo: '/input'});
});
