app.controller('confirmationController', function($scope, Data,$location) { 
 	
 	 Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });

	$scope.newObj = Data.newEmp;
	//$scope.employees.push($scope.newEmp);
	//$location.path("/save");
	
});



