
var app = angular.module('employeeApp', ['ngRoute','tc.chartjs']);

app.config(function ($routeProvider) {
    $routeProvider
	.when('/', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/dashboard', {
	    controller: 'dashboardController',
        templateUrl: '/partials/dashboard.html'
    })
	.when('/edit', {
	    controller: 'newController',
        templateUrl: '/partials/edit.html'
    })
     .when('/save',{
        controller: 'confirmationController',
        templateUrl: '/partials/save.html'
    })
	.when('/back', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/schedule',{
        controller: 'scheduleController',
        templateUrl: '/partials/schedule.html'
    })
    .when('/reports',{
        controller: 'reportsController',
        templateUrl:'/partials/reports.html'
    })
    .when('/staff',{
        controller: 'staffController',
        templateUrl: '/partials/staff.html'
    })
    .when('/requests',{
        controller: 'requestsController',
        templateUrl: '/partials/requests.html'
    })
    .when('/customers',{
        controller:'customersController',
        templateUrl: '/partials/customers.html'
    })
    .when('/todos',{
        controller: 'todosController',
        templateUrl: '/partials/todos.html'
    });


});


/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
