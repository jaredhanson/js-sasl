var express = require('express');
var server = express();

server.use(express.logger())
      .use(express.static(__dirname + '/../www'))
      .use(express.static(__dirname + '/..'))
      .use(express.static(__dirname + '/../..'))
      .listen(7070);
