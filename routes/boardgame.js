var path = require("path");

// Database file location
var db_file = "./bgg.sqlite";
// Import sqlite module
var sqlite3 = require("sqlite3").verbose();
// Connect to database and handle errors
var db = new sqlite3.Database(db_file, function(error) {
  if (!error) { console.log("SUCCESSFULLY connected to database at " + db_file); }
  else { console.log("ERROR connected to database at " + db_file); }
});
// Temporary SQL statement
var sql_stmt = "SELECT objectname as game, rank, maxplayers, minplayers, playingtime from games order by random() limit 0, 10;";

// Function to call when hitting the api for boardgameapp
exports.api = function(req, res) {
  // Check to see if request specific game or request random ones
  if (req.params.gameid) { res.send(req.params.gameid); }
  // If requesting random ones run SQL statement
  else {
    db.all(sql_stmt, function(err, information) {
      res.send(information)
    });
  }
}

// Index function for boardgame app
exports.index = function(req, res) {
  res.sendFile(path.resolve("./public/html/boardgame.html"));
}
