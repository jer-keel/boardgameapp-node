exports.api = function(req, res) {
  if (req.params.gameid) { res.send(req.params.gameid); }
  else { res.send('Game API'); }
}

exports.index = function(req, res) {
  res.send("Welcome to the NodeJS version of the Boardgame App");
}
