window.onload = function(){

    var user = document.getElementById('user-name');
    var userErrorMsg = document.getElementById('user-error-msg');
    var password = document.getElementById('password');
    var passwordErrorMsg = document.getElementById('password-error-msg');
    var loginButton = document.getElementById('login-button');

    user.addEventListener('blur', userValidation);
    password.addEventListener('blur', passwordValidation);

    user.addEventListener('focus', function(){clearError(user, userErrorMsg); });
    password.addEventListener('focus', function(){clearError(password, passwordErrorMsg)});

    loginButton.addEventListener('click', login);
}

function userValidation(){
    var user = document.getElementById('user-name');
    var userErrorMsg = document.getElementById('user-error-msg');
    var userRegEx = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!userRegEx.test(user.value) && user.value != 0 ){
        redBorder(user);
        userErrorMsg.innerText = 'Invalid email format';
    }
    else if (user.value.length === 0){
        clearError(user, userErrorMsg);
    }
    else{
        clearError(user, userErrorMsg);
        greenBorder(user);
        return true;
    }
}

function passwordValidation(){
    var password = document.getElementById('password');
    var passwordErrorMsg = document.getElementById('password-error-msg');

    if (password.value.length < 8 && password.value.length > 0){
        passwordErrorMsg.innerText = 'Password must be at least 8 characters long';
        redBorder(password);
        return false;
    }
    else if (password.value.length === 0){
        clearError(password, passwordErrorMsg);
        return false;
    }
    else if (password.value.indexOf(' ') != -1){
        passwordErrorMsg.innerText = 'Password can not contain a blank space';
        redBorder(password);
        return false;
    }
    else if (!hasNumbersAndLetters(password.value)){
        passwordErrorMsg.innerText = 'Password must contain letters and numbers';
        redBorder(password);
        return false;
    }
    else{
        clearError(password, passwordErrorMsg);
        greenBorder(password);
        return true;
    }
}

function login(e){
    if (!userValidation()){
        alert('Invalid User! Please try again');
    }
    else if (!passwordValidation()){
        alert('Invalid Password! Please try again');
    }
    else{
        e.preventDefault();
        var userAlert = document.getElementById('user-name').value;
        var passwordAlert = document.getElementById('password').value;
        alert('User: ' + userAlert + ' Pass: ' + passwordAlert);

        var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email='
        +userAlert
        +'&password='+passwordAlert;

        fetch(urlWithQP).then(function (res){
            return res.json();
        })
            .then(function (data){
                alert(data.msg);
                if(!data.success){
                    throw new Error('There was an error with the request');
                }
            })
            .catch(function (error){
                console.log(error);
            })
    }
}

function hasNumbersAndLetters(password){
    var passwordLow = password.toLowerCase();
    var i = 0;
    var number = false;
    var letter = false;
    while (i < passwordLow.length && !(letter && number)) {
        if (passwordLow.charCodeAt(i) >= 48 && passwordLow.charCodeAt(i) <= 57){
            number = true;
        }
        else if (passwordLow.charCodeAt(i) >= 97 && passwordLow.charCodeAt(i) <= 122){
            letter = true;
        }
        i++;
    }
    return number && letter;
}

function greenBorder(formInput){
    formInput.classList.remove('red-border');
    formInput.classList.add('green-border');
}

function redBorder(formInput){
    formInput.classList.remove('green-border');
    formInput.classList.add('red-border');
}

function clearError(formInput, errorMsg){
    formInput.classList.remove('green-border', 'red-border');
    errorMsg.innerText = '';
}