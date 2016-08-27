(function() {
  var app = angular.module("githubViewer");
  
  var RepoController = function($scope, github, $routeParams) {
    
    var onUserComplete = function(data){
     
      $scope.user=data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data) {
      $scope.repos = data;
      
      var repoArray = $scope.repos;
      //find the repo object we want
      for(i=0;i<repoArray.length;i++)
      {
        if(repoArray[i].name == $scope.reponame)
        {
          github.getContributors(repoArray[i]).then(onContributors, onError);
          break;
        }
      }
      
    };
    
    var onRepo = function(data)
    {
      $scope.repoData = data;
      github.getContributors($scope.repoData).then(onContributors,onError);
    }
    var onContributors = function(data) {
      $scope.contributors = data;
      
    };
    
    var onError = function(reason){
      $scope.error = "Could not fetch the data";
    };
    
    $scope.reponame=$routeParams.reponame;
    $scope.username=$routeParams.username;
    github.getUser($scope.username).then(onUserComplete,onError);
    
  };
  
  app.controller("RepoController",RepoController);
}());