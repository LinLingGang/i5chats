var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('d'));
io.on('connection',function(socket){
	//console.log('a user connection');
	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
  	socket.on('adduser', function(msg){
  		socket.username=msg
  	});
  	socket.on('chat', function(msg){
    	io.emit('chat', {'username':socket.username,'msg':msg});
  	});
})

http.listen(3000,function(){
	console.log("listening on *:3000");
});
