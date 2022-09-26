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

        if (!userRegEx.test(user.value) && user.value != 0 ){
            userErrorMsg.innerText = 'Invalid email format';
        }
        else if (user.value.length == 0){
            userClearError();
        }
}

function passwordValidation(){
    var password = document.getElementById('password');
    var passwordErrorMsg = document.getElementById('password-error-msg');

    if (password.value.length < 8 && password.value.length > 0){
        passwordErrorMsg.innerText = 'Password must be at least 8 characters long';
    }
    else if (password.value.length == 0){
        passwordClearError();
    }
    else if (password.value.length >= 8){
        if (password.value.indexOf(' ') != -1){
            passwordErrorMsg.innerText = 'Password can not contain a blank space';
        }
        else{
            if (!hasNumbersAndLetters(password.value)){
                passwordErrorMsg.innerText = 'Password must contain letters and numbers';
            }
        }
    }
}

function userClearError(){
    document.getElementById('user-error-msg').innerHTML = '';
}

function passwordClearError(){
    document.getElementById('password-error-msg').innerHTML = '';
}

function login(e){ //needs to be finished
    e.preventDefault();
    var userAlert = document.getElementById('user-name').value;
    var passwordAlert = document.getElementById('password').value;
    alert('User: ' + userAlert + ' Pass: ' + passwordAlert);
}

function hasNumbersAndLetters(password){
    var passwordLow = password.toLowerCase();
    var i = 0;
    var number = false;
    var letter = false;
    while(i < passwordLow.length && !letter && !number) {
        if (Number(passwordLow[i]) != NaN){
            number = true;
        }
        else if (charCodeAt(passwordLow) >= 97 && charCodeAt(passwordLow) <= 122){
            letter = true;
        }
        i++;
    }
    return number && letter;
}