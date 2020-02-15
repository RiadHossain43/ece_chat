require('dotenv').config();

var PORT = process.env.PORT || 3000;
const DEPARTMENTAL_PASS = 'chat';

// Create server....
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var https = require('https');
var server = https.Server(app);

const io = require('socket.io')(server);

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.MONGODB_URI || 'mongodb://localhost';

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static('assets'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/login.html');
});

let username ;

server.listen(PORT,function(){
    console.log("Chat server running");
});



//connecting into database...

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("database connected");

    app.post('/chats',urlencodedParser,(req,resposnse)=>{

        username = req.body.username;
        console.log(username);

        // login verification....
        users.find({name:username}).toArray((err,res)=>{
        
            if( res.length == 0 || req.body.password != DEPARTMENTAL_PASS) 
                resposnse.redirect('/');
            else
                resposnse.sendFile( __dirname + '/chats.html'); 
        });
    });

    const db = client.db("ecechats");
    const chats = db.collection('chats');
    const users = db.collection('users');
    
    //user connection...
    io.on('connection', socket =>{
        console.log("new person connected");

        //updating user ID with sockect ID
        users.updateOne({name:username},{$set:{id:socket.id}});
        console.log('updated succesfully');


        // Load all the availabele old chats down to the current client...
        chats.find().sort({_id:1}).toArray((err, res)=>{
            if (err) throw err;
            socket.emit('load_Chat_msg',res);
            socket.emit('get_user',username);
        });

        // Getting live input & Generating the intantanus output down to the client...
        socket.on('input', (msg)=>{

            var user;
            users.find({id:socket.id}).toArray((err,res)=>{
                if(err) throw err;
                user = res[0].name;
                var data = {
                    msg:msg,
                    name:user
                };
                //inserting into database...
                chats.insert({msg:msg,name:user},()=>{
                    //sening output..
                    socket.broadcast.emit('instant_output',data);
                });
            });
        });
    });
});



