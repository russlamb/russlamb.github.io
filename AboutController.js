// Code goes here
(function(){
  
  var app = angular.module("navbar");
  
  var AboutController = function($scope,  $interval, $location) {
    
    
    var decrementCountdown = function(){
      $scope.countdown -= 1;
      if( $scope.countdown <1 )
      {
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval=null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown,1000,$scope.countdown);
    };
    
    $scope.search = function(username) {
        
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown=null;
      }
      $location.path("/project")
    };
    
    $scope.countdown = 10;
    $scope.username = "angular";
    startCountdown();
  };
  
  app.controller("AboutController",AboutController);
}());