var app = angular.module('trailModule');

app.factory('trailFactory', function($http) {
  var trails = [];
  return {
    setTrails: setTrails,
    getTrails: getTrails
  };

  function setTrails(input) {
    var promise = $http({
      method: 'GET',
      url: 'https://trailapi-trailapi.p.mashape.com/?limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Detroit&q[state_cont]=Michigan&radius=25',
      headers: {
        "X-Mashape-Key": "R1glfXkirXmshT0plpNskOg4o2Vkp1sEliJjsngVH16kpyh0YU",
        "Accept": "text/plain"
      }
    }).then(function(response) {
      console.log(response.data.places);
    });
    return promise;
  };

  function getTrails() {
    return trails;
  };

});





//
//
// // These code snippets use an open-source library. http://unirest.io/nodejs
// unirest.get("https://trailapi-trailapi.p.mashape.com/?limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[state_cont]=California&radius=25")
// .header("X-Mashape-Key", "tkjfAS2IJ8mshwCei1nCt6tyOlJkp1rGOsPjsnLRlY6zuZEsi7")
// .header("Accept", "text/plain")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
