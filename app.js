var app = angular.module('navbar',["ngRoute"]);

app.controller('MainCtrl', function($scope) {
  
  $scope.sidedata ={
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
    ],
    sourceRepos:[
      {
        name: "Python Tic Tac Toe",
        github: "https://github.com/russlamb/py-tic-tac-toe",
        note:"Note: The above link takes you to the github repository page",
        description: "This was a demo application I wrote using python to process user input.",
        description2:"The program allows the user to play a text-based version of tic-tac-toe.",
        description3:"I used python 2.7 instead of 3.5 for compatability reasons.",
        tools:"Tools Used: Python 2.7"
      },
      {
        name: "Excel Trimmer",
        github: "https://github.com/russlamb/xl_trim",
        note:"Note: The above link takes you to the github repository page",
        description: "This was a utility package created with Panda and Python to strip the header rows off Excel (.xls) files.",
        description2:"I used this as part of an Extract Transform Load project to automate file processing and load into a database.",
        description3:"",
        tools:"Tools Used: Python 3.5.2, Pandas"
      },
      {
        name: "File Watcher",
        github: "https://github.com/russlamb/python-filewatch",
        note:"Note: The above link takes you to the github repository page",
        description: "This is a long running process that watches a directory for any new files.  If it finds one, and it matches a set of patterns, it moves the file to a different directory.",
        description2:"I'm using this to monitor and organize my downloads.",
        description3:"",
        tools:"Tools Used: Python 3.5.2, Watchdog"
      }
      ]
    




  }
});