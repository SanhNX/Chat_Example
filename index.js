var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg, name){
        io.emit('chat message', msg, name);
    });
});

http.listen(8888, function(){
   console.log('Listening on *:8888');
});