app.controller('customersController', function($scope, Data,$location,$http) { 

  $http.get("http://www.w3schools.com/angular/customers.php")
  .success(function (response) {$scope.names = response.records;});
});
	
