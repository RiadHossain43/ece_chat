
const signup_btn = document.getElementById('signup_btn');
const signin_btn = document.getElementById('signin_btn');
const signin_cont = document.getElementById('signin_content');
const signup_cont = document.getElementById('signup_content');
const signup_form = document.getElementById('signup_form');
const signin_form = document.getElementById('signin_form');
const submit = document.getElementsByClassName('Submit');
const sign_in_user = document.getElementById('sign_in_user');
const password = document.getElementById('password');


signup_btn.addEventListener('click',(e)=>{
    signup_cont.classList.remove('left_shift');
    signin_form.classList.add('left_shift');
    signup_form.classList.remove('right_shift');
    signin_cont.classList.add('right_shift');
});

signin_btn.addEventListener('click',(e)=>{
    signup_cont.classList.add('left_shift');
    signin_form.classList.remove('left_shift');
    signup_form.classList.add('right_shift');
    signin_cont.classList.remove('right_shift');
});



for(var i =0 ;i < submit.length ;i++)
{
    submit[i].addEventListener('click',(e)=>{
        e.target.parentElement.submit();
    });
}