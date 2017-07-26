var app = angular.module('trailModule');

app.controller('inputCtrl', function($scope, trailFactory, $location) {

  $scope.searchTrails = function (userCity, userState, userRadius) {
    if (userCity == undefined || userState == undefined || userRadius == undefined) {
      
    }

    var userInput = {
      city: userCity,
      state: userState,
      radius: userRadius
    }

    trailFactory.setTrails(userInput).then(function(){
      $location.path('/output');
    });
  };


});
