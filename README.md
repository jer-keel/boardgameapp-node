# Boardgameapp - Node Version
This is a clone of the boardgame app but instead of using a LAMP stack this one uses a (M)EAN Stack. (M)EAN stands for (Mongo, in parenthesis because for this one we are actually using sqlite), Express, Angular, and NodeJS. This is a practice exercise to learn NodeJS and webdevlopment. 

An example of this application can be found on my server at [jkeeler.me](http://jkeeler.me/boardgameapp).

### Installation
To get this application up and running make sure that NodeJS and npm are installed. Then, clone the repo and run `npm install` while inside the directory. Then simply run `node app.js` and the server will start on `localhost:3000`

### API Calls
To access the backend of the application (AKA accessing the database) there is an API that executes an SQL statement based on the URL provided. To access the API got to `/api/games?query` where query is equal to a set of specific parameters. Going to just `/api/games` returns 10 random games. The possible parameters for the query string are `players=`, `time=`, and `games=`. Any of these parameters can be chained together in the URL by adding a `&` between the parameters. Some example API request are listed below.
* * *
[`/api/games`](http://jkeeler.me/boardgameapp/api/games)

Return 10 random games.
* * *
[`/api/games?players=4`](http://jkeeler.me/boardgameapp/api/games?players=4)

Return 10 random games that support at least 4 players.
* * *
[`/api/games?time=60`](http://jkeeler.me/boardgameapp/api/games?time=60)

Return 10 random games that take less than or equal to 60 minutes to play.
* * *
[`/api/games?games=5`](http://jkeeler.me/boardgameapp/api/games?games=5)

Return 5 random games.
* * *
[`/api/games?players=4&time=60`](http://jkeeler.me/boardgameapp/api/games?players=4&time=60)

Return 10 random games that support at least 4 players and take less than or equal to 60 minutes to play.
