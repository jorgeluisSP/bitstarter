var express = require('express');
var fs = require('js');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync('index.html','utf8');
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
