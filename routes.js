var index = require('./routes/index');
var boardgame = require('./routes/boardgame');

module.exports = function(server) {
  server.get('/boardgameapp', boardgame.index);
  server.get('/boardgameapp/api/games/:gameid?', boardgame.api);
  server.get('/', index.index);
}
