var origin = window.location.hostname;
var port = 10000 ;
console.log(port);
const socket = io('https://'+ origin +':' + port );

const msg_form = document.getElementById("msg_typesection");
const msg_input = document.getElementById("msg_input");
const messages_container = document.getElementById("messages");

// communicating with server in real time...
socket.on('Chat_msg', data => {

   // alert(data);

    var time = new Date();
    time = time.toISOString().split('T')[0];

    append_msg_other(data, time);
    notify_unread_messages();
});

socket.on("notify",data=>{
    alert(data);
});

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

    socket.emit('send_chat_msg', msg);
   // alert("masg send");

    msg_input.value = "";
    append_msg_self(msg, time)
});

// appending the messegse in the ui.....
function append_msg_other(msg, time) {
    const msg_row = document.createElement('div');

    const msg_content = document.createElement('div');
    const sender_img = document.createElement('div');
    const msg_txt = document.createElement('div');
    const msg_time = document.createElement('div');

    msg_txt.innerText = msg;
    msg_time.innerText = time;

    msg_row.appendChild(msg_content);
    msg_content.appendChild(sender_img);
    msg_content.appendChild(msg_txt);
    msg_content.appendChild(msg_time);

    msg_row.classList.add("msg_row", "sender_msg");
    msg_content.classList.add("msg_content");
    sender_img.classList.add("sender_img");
    msg_txt.classList.add("msg_txt");
    msg_time.classList.add("msg_time");

    //messages_container.appendChild(msg_row);
    messages_container.insertBefore(msg_row, messages_container.firstChild);

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
        //alert("hi");
        menu.classList.add("open");
    });
    menucut.addEventListener("click", () => {
        menu.classList.remove("open");
    });
    menulink[0].addEventListener("click", () => {
        // alert("ok 1");
        nav.style.left = "0";
        chatbody.style.left = "-100%";
        menu.classList.remove("open");
    });
    menulink[1].addEventListener("click", () => {
        //alert("ok 2");
        people.style.left = "0";
        chatbody.style.left = "-100%";
        menu.classList.remove("open");
    });
    for(var i = 0 ;i<backlink.length;i++)
    {
        backlink[i].addEventListener("click",()=>{
            nav.style.transition = "all 1s ease-out";
            people.style.transition = "all 1s ease-out";
            chatbody.style.transition = "all 1s ease-out";
            nav.style.left = "-100%";
            people.style.left = "-100%";
            chatbody.style.left = "0";
            setTimeout(()=>{
                nav.style.transition = "";
                people.style.transition = "";
                chatbody.style.transition = "";
            },1000);
        });
    }

}
// Utility function Function calls...
find_new_msg();
mobile_menu_handler();