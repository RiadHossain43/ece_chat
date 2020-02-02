var PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);

io.on('connection',socket=>{
    socket.on("send_chat_msg",msg=>{
        socket.broadcast.emit("Chat_msg",msg);
    });
});