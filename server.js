var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('./Rokid'));

var server = app.listen(8080, function() {
    app.get('/', function(req, res) {
        res.send('Birds home page');
    });
    console.log('Listening on port %d', server.address().port);
});

// console.log('Server  running on port 8080.');