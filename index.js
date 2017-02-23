
var express = require('express');
var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  socket.on('position', function(datas){
    io.emit('position', datas);
    console.log('position', datas);
  });
  
  socket.on('create', function(datas){
    io.emit('create', datas);
    console.log('create', datas);
  });
  
  socket.on('collision', function(datas){
    io.emit('collision', datas);
    console.log('collision', datas);
  });
  
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});
