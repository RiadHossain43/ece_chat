var PORT = 3000; //process.env.PORT || 

const mongo = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var https = require('http');

var server = https.Server(app);

server.listen(PORT,function(){
    console.log("Chat server running");
});

const io = require('socket.io')(server);

// connect to mongodb

io.on('connection',socket=>{

    //socket.emit("notify","hello world");

    socket.on("send_chat_msg",msg=>{
        socket.broadcast.emit("Chat_msg",msg);
    });
});