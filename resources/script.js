var form = document.querySelector('form');
var email = document.getElementById('email');
var message = document.getElementById('message');


    // function changeImg(tag){
    //     document.getElementById(tag).style.borderImageSource = 
    // }    


function inSubmit(e){ 

    e.preventDefault();

    if( email.value.trim() == "")
    {
        message.innerHTML = "Email Address cannot be empty";
        message.style.visibility = "visible";
        email.style.border = "2px solid #fa5d5d";
    }
}

function valid(e){
    e.preventDefault();

    message.innerHTML = "Please provide a valid email address";
    email.style.border = "2px solid #fa5d5d";
    email.value = "email@example/com";
    message.style.visibility = "visible";
}


form.addEventListener('submit', inSubmit);

email.addEventListener('invalid', valid);