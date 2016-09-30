(function() {

    var app = angular.module("navbar");

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
          .when("/modem", {
            templateUrl: "modem.html",
            //controller: "OtherController"
            controller: "AboutController"
          })
          .when("/source", {
            templateUrl: "source.html",
            //controller: "OtherController"
            controller: "AboutController"
          })
      .otherwise({
        redirectTo: "/about"
      });
    });
  
}());