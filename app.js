var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


io.sockets.on('connection', function(socket) {
    socket.broadcast.emit('user connected')
});

server.dirname = __dirname;

require("./config/init")(app);
require("./config/routes")(app);

server.listen(3000);