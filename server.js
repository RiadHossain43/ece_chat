var PORT = process.env.PORT || 8080;
var express = require('express');
var app = express();
var https = require('https');

var server = https.Server(app);

server.listen(PORT,function(){
    console.log("Chat server running");
});

const io = require('socket.io')(server);

io.on('connection',socket=>{

    socket.emit("notify","hello world");

    socket.on("send_chat_msg",msg=>{
        socket.broadcast.emit("Chat_msg",msg);
    });
});