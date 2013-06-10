var express = require('express');
var server = express();

server.use(express.logger())
      .use(express.static(__dirname + '/../www'))
      .use(express.static(__dirname + '/..'))
      .use(express.static(__dirname + '/../..'))
      .listen(7070, function() {
        console.log('HTTP server listening on %s:%d', this.address().address, this.address().port);
      });
