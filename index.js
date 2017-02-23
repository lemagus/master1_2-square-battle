var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  socket.on('position', function(datas){
    io.emit('position', datas);
  });
  
  socket.on('create', function(datas){
    io.emit('create', datas);
  });
  
  socket.on('collision', function(datas){
    io.emit('collision', datas);
  });
  
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});
