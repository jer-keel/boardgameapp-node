var path = require("path");
var colors = require("colors/safe");

// Database file location
var db_file = "./db/bgg.sqlite";
// Import sqlite module
var sqlite3 = require("sqlite3").verbose();
// Connect to database and handle errors
var db = new sqlite3.Database(db_file, function(error) {
  if (!error) { console.log("SUCCESSFULLY connected to database at " + db_file); }
  else { console.log("ERROR connected to database at " + db_file); }
});

// Function to call when hitting the api for boardgameapp
exports.api = function(req, res) {
  // Temporary SQL statement partials
  var sql_stmt1 = "SELECT objectname as game, average, rank, maxplayers, minplayers, playingtime, thumbnail from games JOIN extra on (games.objectid = extra.objectid) ";
  var sql_stmt2 = "WHERE ";
  var sql_stmt3 ="order by random() limit 0, ";

  var numQs = 0;
  var num_games = 10;

  if (req.query.games) { num_games = req.query.games; }

  if (req.query.players) { 
    sql_stmt2 += "minplayers<=" + req.query.players + " AND maxplayers>= " + req.query.players + " ";
    numQs++;
  }

  if (req.query.time) {
    if (numQs > 0) { sql_stmt2 += "AND "; }
    sql_stmt2 += "playingtime<=" + req.query.time + " ";
    numQs++;
  }

  if (numQs === 0) { sql_stmt2 = ""; }
  sql_stmt3 += num_games + ";";
  stmt = sql_stmt1 + sql_stmt2 + sql_stmt3;
  //console.log(stmt);

  // Check to see if request specific game or request random ones
  if (req.params.gameid) { res.send(req.params.gameid); }
  // If requesting random ones run SQL statement
  else {
    db.all(stmt, function(err, information) {
      res.send(information)
    });
  }
}

// Index function for boardgame app
exports.index = function(req, res) {
  console.log("New client has logged on with ip: " + colors.green(req.ip));
  res.render("boardgame");
  //res.sendFile(path.resolve("./public/html/boardgame.html"));
}
