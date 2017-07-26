var app = angular.module('trailModule');

app.controller('outputCtrl', function($scope, trailFactory) {
  $scope.trails = trailFactory.getTrails();
  // console.log($scope.trails);
  // $scope.userObject = displayInput();
});
