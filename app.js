var app = angular.module('myApp', ['ngRoute']);

// Configure routes
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html",
        controller : "HomeController"
    })
    .when("/about", {
        templateUrl : "pages/about.html",
        controller : "AboutController"
    })
    .when("/contact", {
        templateUrl : "pages/contact.html",
        controller : "ContactController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

// Controllers
app.controller("HomeController", function($scope) {
    $scope.message = "Welcome to the Home Page!";
});

app.controller("AboutController", function($scope) {
    $scope.message = "Learn more About Us!";
});

app.controller("ContactController", function($scope) {
    $scope.message = "Contact us for more information.";
});
