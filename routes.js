// Import route files from the routes folder
var index = require("./routes/index");
var boardgame = require("./routes/boardgame");

module.exports = function(server) {
  // Map url and HTTP requests to specific functions
  server.get("/boardgameapp", boardgame.index);
  server.get("/boardgameapp/api/games/:gameid?", boardgame.api);
  server.get("/", index.index);
};
