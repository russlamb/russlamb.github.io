(function() {

    var app = angular.module("navbar");

    app.config(function($routeProvider) {
        $routeProvider
          .when("/project", {
            templateUrl: "project.html",
            //controller: "ProjectController"
            controller: "MainCtrl"
          })
          .when("/about", {
            templateUrl: "about.html",
            controller: "MainCtrl"
          })
          .when("/other", {
            templateUrl: "other.html",
            //controller: "OtherController"
            controller: "MainCtrl"
          })
          .when("/coffee", {
            templateUrl: "coffee.html",
            //controller: "OtherController"
            controller: "MainCtrl"
          })
          .when("/modem", {
            templateUrl: "modem.html",
            //controller: "OtherController"
            controller: "MainCtrl"
          })
          .when("/source", {
            templateUrl: "source.html",
            //controller: "OtherController"
            controller: "MainCtrl"
          })
      .otherwise({
        redirectTo: "/about"
      });
    });
  
}());