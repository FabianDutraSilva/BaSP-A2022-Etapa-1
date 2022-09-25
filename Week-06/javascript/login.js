window.onload = function () {

    //EMAIL REGEX//
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    //EMAIL VALIDATION - BLUR//
    var userName = document.getElementById('userName');
    userName.onblur = function (){
        if (emailExpression.test(userName.value)){
            userName.classList.add('green-border');
        }
        else{
            userName.classList.add('red-border');
        }
    }

    //PASSWORD VALIDATION - BLUR//
    var password = document.getElementById('password');

    //ONFOCUS//
    userName.onfocus = function (){
        userName.classList.remove('green-border', 'red-border');
    }

    //CLICK BUTTON//
    var loginButton = document.getElementById('login-button');
    loginButton.onclick = function(e){
        e.preventDefault();
        alert('User: ' + userName.value + ' Pass: ' + password.value);
    }
    //email error msg//
    //var emailErrorMsg = document.createTextNode('Invalid email format! Please try again.');
    //var emailErrorDiv = document.createElement('div');
    //emailErrorDiv.appendChild(emailErrorMsg);

    //QUERYSELECTOR//
    //var container = document.querySelector('fieldset .login-input');
    //var loginInput = document.querySelector('fieldset input');
}