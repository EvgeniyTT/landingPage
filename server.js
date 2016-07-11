
var http = require("http");
var url = require("url");
var fs = require("fs");
var static = require('node-static');
var util = require('util');
var path = require('path');
var $ = require("jquery");

var fileServer = new static.Server(__dirname);

var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type,accept');

  if (request.method === 'OPTIONS') {
      response.statusCode=200;
      response.end();
  } else if (request.method === 'GET' &&  request.url.split('/').pop() === 'home') {
    fs.readFile("site.html" , function(error, info) {
      response.write(info);
      response.statusCode=200;
      response.end();
    })
  } else if( request.url.match(/\S*\.[html,jpg,png,js,css]/) ) {
    fileServer.serve(request, response);
  } else {
      response.statusCode=404;
      response.end("there is no content served by this address");
    }
});

if (module.parent) { module.exports = server } else { server.listen(1337); }
