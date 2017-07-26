var app = angular.module('trailModule');

app.controller('inputCtrl', function($scope, trailFactory, $location) {
  $scope.searchTrails = function (locationInfo) {
    trailFactory.setTrails(locationInfo).then(function(){
      $location.path('/output');
    });
  }
});
