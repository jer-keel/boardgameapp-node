var express = require('express');
var server = express();
var routes = require('./routes')(server);

var port = 3000;
server.listen(port);
console.log('Server is now listening on port ' + port);
