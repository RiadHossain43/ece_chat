var PORT = 443;


const io = require('socket.io')(PORT);

io.on('connection',socket=>{
    socket.on("send_chat_msg",msg=>{
        socket.broadcast.emit("Chat_msg",msg);
    });
});