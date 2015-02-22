var app = angular.module("gamesapp", []);
console.log("AngularJS app had been loaded!");

var GameClass = function() {
  this.game = "A default game";
  this.playingtime = "Unknown";
  this.alert = function() {
    alert(this.game + " :: " + this.playingtime + " minutes");
  };
};

app.controller("GameController", ["$scope", "$http", function($scope, $http) {
  $scope.games = [{"game": "game1"}];
  $http.get("boardgameapp/api/games").success(function(data, status, headers, config) {
    $scope.games = [];
    angular.forEach(data, function(game) {
      var thisGame = new GameClass();
      angular.extend(thisGame, game);
      $scope.games.push(thisGame);
    }, this);
  });
}]);
