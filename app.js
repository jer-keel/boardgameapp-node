var express = require('express');
var server = express();

server.get('/boardgameapp', function(req, res) {
  res.send("Welcome to the Boardgame App!");
});

server.get('/boardgameapp/api/games/:gameid?', function(req, res) {
  if (req.params.gameid) { res.send(req.params.gameid); }
  else { res.send('API'); }
});

server.get('/', function(req, res) {
  res.send('Jeremy\'s server, yo');
});

var port = 3000;
server.listen(port);
console.log('Server is now listening on port ' + port);
