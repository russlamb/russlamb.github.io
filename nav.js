(function() {

    var app = angular.module("navbar", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
          .when("/project", {
            templateUrl: "project.html",
            //controller: "ProjectController"
            controller: "AboutController"
          })
          .when("/about", {
            templateUrl: "about.html",
            controller: "AboutController"
          })
          .when("/other", {
            templateUrl: "other.html",
            //controller: "OtherController"
            controller: "AboutController"
          })
          .when("/coffee", {
            templateUrl: "coffee.html",
            //controller: "OtherController"
            controller: "AboutController"
          })
      .otherwise({
        redirectTo: "/about"
      });
    });
  
}());