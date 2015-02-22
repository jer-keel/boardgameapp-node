// Create the angular app and add log
var app = angular.module("gamesapp", []);
console.log("AngularJS app had been loaded!");

// Define a game using the GameClass
var GameClass = function() {
  this.game = "A default game";
  this.rank = "-1";
  this.minplayers = "-1";
  this.maxplayers = "-1";
  this.playingtime = "-1";
};

// Create a GameController
app.controller("GameController", ["$scope", "$http", function($scope, $http) {
  // Initialize the scope games to none
  $scope.games = [];

  // Request JSON information from the api
  $http.get("api/games").success(function(data, status, headers, config) {
    $scope.games = [];

    // For each game object received from the api push it on to the games array
    angular.forEach(data, function(game) {
      var thisGame = new GameClass();
      angular.extend(thisGame, game);
      $scope.games.push(thisGame);
    }, this);
  });
}]);
