const io = require('socket.io')(3000);

io.on('connection',socket=>{
    socket.on("send_chat_msg",msg=>{
        socket.broadcast.emit("Chat_msg",msg);
    });
});