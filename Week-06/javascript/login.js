window.onload = function(){

    //VAR
    var user = document.getElementById('user-name');
    var password = document.getElementById('password');
    var loginButton = document.getElementById('login-button');

    //BLUR
    user.addEventListener('blur', userValidation);
    password.addEventListener('blur', passwordValidation);

    //FOCUS
    user.addEventListener('focus', userClearError);
    password.addEventListener('focus', passwordClearError);

    //CLICK
    loginButton.addEventListener('click', login);
}

function userValidation(){
    var user = document.getElementById('user-name');
    var userErrorMsg = document.getElementById('user-error-msg');
    var userRegEx = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if (!userRegEx.test(user.value)){
            userErrorMsg.innerText = 'Invalid email format';
        }
        if (user.value.length == 0){
            userClearError();
        }
}

function passwordValidation(){
    var password = document.getElementById('password');
    var passwordErrorMsg = document.getElementById('password-error-msg');
    var i;

        if (password.value.length < 8 && password.value.length > 0){
            passwordErrorMsg.innerText = 'Password must be at least 8 characters long';
            return false;
        }
        else if (password.value.length == 0){
            passwordClearError();
            return false;
        }
        else if (password.value.length >= 8){
            if (password.value.indexOf(' ') != -1){
                passwordErrorMsg.innerText = 'Password can not contain a blank space';
                return false;
            }
        }
        else{
            return true;
        }
}

function userClearError(){
    var userErrorMsg = document.getElementById('user-error-msg');
    userErrorMsg.innerHTML = '';
}

function passwordClearError(){
    var passwordErrorMsg = document.getElementById('password-error-msg');
    passwordErrorMsg.innerHTML = '';
}

function login(e){ //needs to be finished
    e.preventDefault();
    var userAlert = document.getElementById('user-name').value;
    var passwordAlert = document.getElementById('password').value;
    alert('User: ' + userAlert + ' Pass: ' + passwordAlert);
}