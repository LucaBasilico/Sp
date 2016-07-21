var app = angular.module('myApp',["ngResource", "spring-data-rest"]);

app.controller('myCtrl', function($scope, $http, SpringDataRestAdapter) {
  $scope.title="demoRest - Frontend Angular";
  var httpPromise = $http.get('http://localhost:8080/people/');

  SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
      $scope.people = processedResponse._embeddedItems;
      console.log("Okay");
  });
});
