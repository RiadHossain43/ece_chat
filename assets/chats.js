
var origin = window.location.hostname;
var PORT = window.location.port || 3000; // window.location.port ||
console.log(origin);

const socket = io(); //'http://'+ origin + ':' + PORT 

const msg_form = document.getElementById("msg_typesection");
const msg_input = document.getElementById("msg_input");
const messages_container = document.getElementById("messages");


if (socket !== undefined) {
    console.log("Connected to server");
    // communicating with server in real time... 

    socket.on('load_Chat_msg', data => {
        // alert(data);
        console.log(data[data.length - 1].msg);

        // loading masseges to ui...

        if (data.length) {
            socket.on('get_user', (user) => {
                var username = user;
                for (var x = 0; x < data.length; x++) {
                    var time = new Date();
                    time = time.toISOString().split('T')[0];
                    console.log(data[x].name + '  ' + data[x].msg);
                    if (data[x].name == username)
                        append_msg_self(data[x].msg, time);
                    else
                        append_msg_other(data[x].name, data[x].msg, time);
                    //notify_unread_messages();
                }

            });
        }
    });

    socket.on('instant_output', data => {
        var time = new Date();
        time = time.toISOString().split('T')[0];
        append_msg_other(data.name, data.msg, time);
    });
}


// observing form submission....

msg_form.addEventListener('submit', e => {
    e.preventDefault();

    if (msg_input.value == "") {
        alert("PLease write something");
        return;
    }

    var time = new Date();
    time = time.toISOString().split('T')[0];
    const msg = msg_input.value;

    socket.emit('input', msg);
    // alert("masg send");

    msg_input.value = "";
    append_msg_self(msg, time)
});

// appending the messegse in the ui.....
function append_msg_other(name, msg, time) {
    const msg_row = document.createElement('div');

    const msg_content = document.createElement('div');
    const sender_img = document.createElement('div');
    const msg_txt = document.createElement('div');
    const msg_time = document.createElement('div');
    const user = document.createElement('div');

    user.innerText = name;
    msg_txt.innerText = msg;
    msg_time.innerText = time;

    msg_row.appendChild(user);
    msg_row.appendChild(msg_content);
    msg_content.appendChild(sender_img);
    msg_content.appendChild(msg_txt);
    msg_content.appendChild(msg_time);

    msg_row.classList.add("msg_row", "sender_msg");
    msg_content.classList.add("msg_content");
    sender_img.classList.add("sender_img");
    msg_txt.classList.add("msg_txt");
    msg_time.classList.add("msg_time");
    user.classList.add('sender_name');

   
    var scrollHeight = messages_container.scrollHeight;
    var currentpos = messages_container.scrollTop + messages_container.offsetHeight;

    if (currentpos != scrollHeight) {
        messages_container.insertBefore(msg_row, messages_container.firstChild);
        notify_unread_messages();
    }else{
        messages_container.insertBefore(msg_row, messages_container.firstChild);
        msg_row.scrollIntoView();
    }
}

function append_msg_self(msg, time) {
    const msg_row = document.createElement('div');

    const msg_content = document.createElement('div');
    const msg_txt = document.createElement('div');
    const msg_time = document.createElement('div');

    msg_txt.innerText = msg;
    msg_time.innerText = time;

    msg_row.appendChild(msg_content);
    msg_content.appendChild(msg_txt);
    msg_content.appendChild(msg_time);

    msg_row.classList.add("msg_row", "my_msg");
    msg_content.classList.add("msg_content");
    msg_txt.classList.add("msg_txt");
    msg_time.classList.add("msg_time");

    //messages_container.appendChild(msg_row);
    messages_container.insertBefore(msg_row, messages_container.firstChild);
    msg_row.scrollIntoView();
}

function notify_unread_messages() {
    var scrollHeight = messages_container.scrollHeight;
    var currentpos = messages_container.scrollTop + messages_container.offsetHeight;
    const new_mesgs = document.getElementById("newmessege");
    if (currentpos != scrollHeight) {
        new_mesgs.classList.add("new_msg");
    }
}

// Utility functions for better Dom experience...
// Utility function Defination...
function find_new_msg() {
    const new_mesgs = document.getElementById("newmessege");

    new_mesgs.addEventListener("click", (e) => {
        new_mesgs.classList.remove("new_msg");
        messages_container.firstChild.scrollIntoView();
    });

    messages_container.addEventListener("scroll", (e) => {
        var scrollHeight = messages_container.scrollHeight;
        var currentpos = messages_container.scrollTop + messages_container.offsetHeight;

        if (currentpos == scrollHeight)
            new_mesgs.classList.remove("new_msg");
    });
}
function mobile_menu_handler() {
    const menubar = document.querySelector(".menubar");
    const menu = document.querySelector(".menu");
    const menucut = document.querySelector(".menu i");
    const menulink = document.getElementsByClassName("menu_link");
    const nav = document.getElementById("navigation");
    const people = document.getElementById("people");
    const chatbody = document.getElementById("chatbody");
    const backlink = document.getElementsByClassName("backlink");

    menubar.firstChild.addEventListener("click", () => {
        menu.classList.add("open");
    });
    menucut.addEventListener("click", () => {
        menu.classList.remove("open");
    });
    menulink[0].addEventListener("click", () => {
        people.style.left = "0";
        chatbody.style.left = "-100%";
        menu.classList.remove("open");
    });
    menulink[1].addEventListener("click", () => {
        nav.style.left = "0";
        chatbody.style.left = "-100%";
        menu.classList.remove("open");
    });
    for (var i = 0; i < backlink.length; i++) {
        backlink[i].addEventListener("click", () => {
            nav.style.transition = "all .7s ease-in-out";
            people.style.transition = "all .7s ease-in-out";
            chatbody.style.transition = "all .7s ease-in-out";
            nav.style.left = "-100%";
            people.style.left = "-100%";
            chatbody.style.left = "0";
            setTimeout(() => {
                nav.style.transition = "";
                people.style.transition = "";
                chatbody.style.transition = "";
            }, 1000);
        });
    }

}
function admin_pannel(){
    const ADMIN_PASS = "RiadChat";
    let admin_pannel = document.getElementById('admin_pannel');
    let admin_cut = document.getElementById('admin_cut');
    let pass_cut = document.getElementById('pass_cut');
    let admin = document.getElementById('admin');
    let admin_var = document.getElementById('admin_var');
    let msg_del = document.getElementById('msg_del');
    let varify = document.getElementById('admin_login');
    let admin_pass = document.getElementById('admin_pass');

    admin_pannel.addEventListener('click',()=>{
        admin_var.style.display = 'flex';
    });
    admin_cut.addEventListener('click',()=>{
        admin.style.display = 'none';
    });
    pass_cut.addEventListener('click',()=>{
        admin_var.style.display = 'none';
    });
    msg_del.addEventListener('click',()=>{
        socket.emit('delet', true);
    });
    varify.addEventListener('click',()=>{
        if(admin_pass.value===ADMIN_PASS){
            admin.style.display = 'flex';
            admin_var.style.display = 'none';
            admin_pass.value="";
        }
    });
}
// Utility function Function calls...
find_new_msg();
mobile_menu_handler();
admin_pannel();