var express = require('express');

var Echo_Server = function(){
  var app = express();
  this.server = app;
}

Echo_Server.prototype.get_server = function(){
  this.server.get('/headers', function(request, response) {
    response.json(request.headers);
});

  this.server.get('/headers/:header_name', function(request, response) {
    var header_name = request.params.header_name;
    response.json(request.headers[header_name]);
});

  this.server.get('/version', function(request, response) {
    response.json(request.httpVersion);
});
  
  this.server.get('/', function(request, response) {
    response.send('Home Page');
});
}

Echo_Server.prototype.listen_server = function(){
  this.server.listen(8080);
}

exports.Echo_Server = Echo_Server;
