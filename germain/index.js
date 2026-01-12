window.addEventListener('load',()=>{
    const time = new Date().getHours();
    let greeting = document.getElementById("greeting");
    if(time < 12 && time > 6){
        greeting.innerHTML = "Good Morning"
    }
    else if(time < 16 && time > 12){
        greeting.innerHTML = "Good Afternoon"
    } else{
        greeting.innerHTML = "Good Evening"
    }
})
function validateForm(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    if(username.value == ""){
        usernameError.innerHTML = "Username must not be empty";
    }
    if(password.value.length < 6){
        passwordError.innerHTML = "Password must be at least 6 characters"
    }
}

