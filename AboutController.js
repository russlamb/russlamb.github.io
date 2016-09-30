// Code goes here
(function(){
  
  var app = angular.module("navbar");
  
  var AboutController = function($scope) {
    
   $scope.sidebar = {
          name:"test",
          navlinks: [
            {
              name: "About",
              link: "#/about"
            },
            {
              name: "Projects",
              link: "#/project"
            },
            {
              name: "Source Code",
              link: "#/source"
            },
            {
              name: "Other",
              link: "#/other"
            }
          ]
        }
  };
  
  app.controller("AboutController",AboutController);
}());