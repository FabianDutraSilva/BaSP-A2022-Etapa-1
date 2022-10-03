window.onload = function(){

    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var dni = document.getElementById('dni');
    var birthDate = document.getElementById('birth-date');
    var telephone = document.getElementById('telephone');
    var address = document.getElementById('address');
    var region = document.getElementById('region');
    var postalCode = document.getElementById('postal-code');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordRepeat = document.getElementById('password-repeat');
    var signupButton = document.getElementById('signup-button');

    firstName.addEventListener('blur', firstNameValidation);
    lastName.addEventListener('blur', lastNameValidation);
    dni.addEventListener('blur', dniValidation);
    birthDate.addEventListener('blur', birthDateValidation);
    telephone.addEventListener('blur', telephoneValidation);
    address.addEventListener('blur', addressValidation);
    region.addEventListener('blur', regionValidation);
    postalCode.addEventListener('blur', postalCodeValidation);
    email.addEventListener('blur', emailValidation);
    password.addEventListener('blur', passwordValidation);
    passwordRepeat.addEventListener('blur', passwordRepeatValidation);

    firstName.addEventListener('focus', firstNameClearError);
    lastName.addEventListener('focus', lastNameClearError);
    dni.addEventListener('focus', dniClearError);
    birthDate.addEventListener('focus', birthDateClearError);
    telephone.addEventListener('focus', telephoneClearError);
    address.addEventListener('focus', addressClearError);
    region.addEventListener('focus', regionClearError);
    postalCode.addEventListener('focus', postalCodeClearError);
    email.addEventListener('focus', emailClearError);
    password.addEventListener('focus', passwordClearError);
    passwordRepeat.addEventListener('focus', passwordRepeatClearError);

    signupButton.addEventListener('click', signup);
}

function firstNameValidation(){
    var firstName = document.getElementById('first-name').value;
    firstName = firstName.replaceAll(' ', '');
    var firstNameErrorMsg = document.getElementById('first-name-error-msg');

    if (firstName.length === 0) {
        firstNameClearError();
        return false;
    }
    else if (firstName.length < 1) {
        firstNameErrorMsg.innerText= 'First name must be at least two characters long';
        return false;
    }
    else if (!onlyLetters(firstName)){
        firstNameErrorMsg.innerText= 'First name must contain only letters';
        return false;
    }
    else {
        firstNameClearError();
        return true;
    }
}

function lastNameValidation(){
    var lastName = document.getElementById('last-name').value;
    lastName = lastName.replaceAll(' ', '');
    var lastNameErrorMsg = document.getElementById('last-name-error-msg');

    if (lastName.length === 0) {
        lastNameClearError();
        return false;
    }
    else if (lastName.length < 1) {
        lastNameErrorMsg.innerText= 'N¿Last name must be at least two characters long';
        return false;
    }
    else if (!onlyLetters(lastName)){
        lastNameErrorMsg.innerText= 'Last name may contain only letters';
        return false;
    }
    else {
        lastNameClearError();
        return true;
    }
}

function dniValidation(){
    var dni = document.getElementById('dni').value;
    var dniErrorMsg = document.getElementById('dni-error-msg');

    if (dni.length === 0){
        dniClearError();
        return false;
    }
    else if (dni.length <= 7){
        dniErrorMsg.innerText = 'DNI must be at least 8 characters long';
        return false;
    }
    else if (!onlyNumbers(dni)){
        dniErrorMsg.innerText = 'DNI must contain only numbers';
        return false;
    }
    else{
        dniClearError();
        return true;
    }
}

function telephoneValidation(){
    var telephone = document.getElementById('telephone').value;
    var telephoneErrorMsg = document.getElementById('telephone-error-msg');

    if (telephone.length == 0){
        telephoneClearError();
        return false;
    }
    else if (telephone.length != 10){
        telephoneErrorMsg.innerText = 'Telephone must be 10 characters long';
        return false;
    }
    else if (!onlyNumbers(telephone)){
        telephoneErrorMsg.innerText = 'Telephone must contain only numbers';
        return false;
    }
    else{
        telephoneClearError();
        return true;
    }
}

function addressValidation(){
    var address = document.getElementById('address').value;
    var addressErrorMsg = document.getElementById('address-error-msg');
    var splittedAddress = address.split(' ');

    if (address.length === 0){
        addressClearError();
        return false;
    }
    else if (address.length < 5){
        addressErrorMsg.innerText = 'Address must be at least 5 characters long';
        return false;
    }
    else if (!hasNumbersAndLetters(address)){
        addressErrorMsg.innerText = 'Address must have letters and numbers';
        return false;
    }
    else if (splittedAddress.length != 2){
        addressErrorMsg.innerText = 'Address must be 2 alphanumeric words separated by a space';
        return false;
    }
    else if (address.indexOf(' ') <= 0 || address.indexOf(' ') == address.length-1){
        addressErrorMsg.innerText = 'Address must be 2 alphanumeric words separated by a space';
        return true;
    }
    else {
        addressClearError();
        return true;
    }
}

function birthDateValidation(){
    var birthDate = document.getElementById('birth-date').value;
    var birthDateErrorMsg = document.getElementById('birth-date-error-msg');
    var separateBirthDate = birthDate.split('-');

    if (birthDate.length === 0){
        birthDateClearError();
        return false;
    }
    else{
        var yearBirthDate = separateBirthDate[0];
        var monthBirthDate = separateBirthDate[1];
        var dayBirthDate = separateBirthDate[2];

        if (yearBirthDate > 2022){
            birthDateErrorMsg.innerText= 'Invalid date! Date is out of range';
            return false;
        }
        else{
            birthDateClearError();
            return true;
        }

    }
}

function regionValidation(){
    var region = document.getElementById('region').value;
    if (region.length == 0){
        regionClearError();
        return false;
    }
    else if (!hasNLetters(region,3)){
        document.getElementById('region-error-msg').innerText = 'Invalid format! Region must have at least 3 letters';
        return false;
    }
    else if (isAlphanumeric(region)){
        regionClearError();
        return true;
    }
    else{
        document.getElementById('region-error-msg').innerText = 'Invalid format! Region must be alphanumeric';
        return false;
    }
}

function postalCodeValidation(){
    var postalCode = document.getElementById('postal-code').value;
    if (postalCode.length === 0){
        postalCodeClearError();
        return false;
    }
    else if (!onlyNumbers(postalCode)){
        document.getElementById('postal-code-error-msg').innerText = 'Invalid format! Postal code must be only numbers';
        return false;
    }
    else if (postalCode.length != 4 && postalCode.length != 5){
        document.getElementById('postal-code-error-msg').innerText = 'Invalid format! Postal code must be a 4 or 5 number sequence';
        return false;
    }
    else{
        postalCodeClearError();
        return true;
    }
}

function emailValidation(){
    var email = document.getElementById('email').value;
    var emailRegEx = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (email.length == 0){
        emailClearError();
        return false;
    }
    else if (!emailRegEx.test(email) && email != 0 ){
        document.getElementById('email-error-msg').innerText = 'Invalid email format';
        return false;
    }
    else{
        emailClearError();
        return true;
    }
}

function passwordValidation(){
    var password = document.getElementById('password');
    var passwordErrorMsg = document.getElementById('password-error-msg');

    if (password.value.length < 8 && password.value.length > 0){
        passwordErrorMsg.innerText = 'Password must be at least 8 characters long';
        return false;
    }
    else if (password.value.length === 0){
        passwordClearError();
        return false;
    }
    else {
        if (password.value.indexOf(' ') != -1){
            passwordErrorMsg.innerText = 'Password can not contain a blank space';
            return false;
        }
        else{
            if (!hasNumbersAndLetters(password.value)){
                passwordErrorMsg.innerText = 'Password must contain letters and numbers';
                return false;
            }
        }
    }
    return true;
}

function passwordRepeatValidation(){
    var passwordRepeat = document.getElementById('password-repeat');
    var passwordRepeatErrorMsg = document.getElementById('password-repeat-error-msg');

    if (passwordRepeat.value.length < 8 && passwordRepeat.value.length > 0){
        passwordRepeatErrorMsg.innerText = 'Password Repeat must be at least 8 characters long';
        return false;
    }
    else if (passwordRepeat.value.length == 0){
        passwordRepeatClearError();
        return false;
    }
    else {
        if (passwordRepeat.value.indexOf(' ') != -1){
            passwordRepeatErrorMsg.innerText = 'Password Repeat can not contain a blank space';
            return false;
        }
        else{
            if (!hasNumbersAndLetters(passwordRepeat.value)){
                passwordRepeatErrorMsg.innerText = 'Password Repeat must contain letters and numbers';
                return false;
            }
        }
    }
    return true;
}

function arePasswordsEqual(password,passwordRepeat){
    return password === passwordRepeat;
}

function signup(e){
    var password = document.getElementById('password').value;
    var passwordRepeat = document.getElementById('password-repeat').value;
    if (!firstNameValidation()){
        alert('Invalid First Name! Please try again');
    }
    else if (!lastNameValidation()){
        alert('Invalid Last Name! Please try again');
    }
    else if (!dniValidation()){
        alert('Invalid DNI! Please try again');
    }
    else if (!birthDateValidation()){
        alert('Invalid Birth Date! Please try again');
    }
    else if (!telephoneValidation()){
        alert('Invalid Telephone! Please try again');
    }
    else if (!addressValidation()){
        alert('Invalid Address! Please try again');
    }
    else if (!regionValidation()){
        alert('Invalid Region! Please try again');
    }
    else if (!postalCodeValidation()){
        alert('Invalid Postal Code! Please try again');
    }
    else if (!emailValidation()){
        alert('Invalid Email! Please try again');
    }
    else if (!passwordValidation()){
        alert('Invalid Password! Please try again');
    }
    else if (!passwordRepeatValidation()){
        alert('Invalid Password Repeat! Please try again');
    }
    else if (!arePasswordsEqual(password, passwordRepeat)){
        alert('Passwords do not match! Please try again');
    }
    else{
        e.preventDefault();
        var firstNameAlert = document.getElementById('first-name').value;
        var lastNameAlert = document.getElementById('last-name').value;
        var dniAlert = document.getElementById('dni').value;
        var birthDateAlert = document.getElementById('birth-date').value;
        var telephoneAlert = document.getElementById('telephone').value;
        var addressAlert = document.getElementById('address').value;
        var regionAlert = document.getElementById('region').value;
        var postalCodeAlert = document.getElementById('postal-code').value;
        var emailAlert = document.getElementById('email').value;
        var passwordAlert = document.getElementById('password').value;
        var passwordRepeatAlert = document.getElementById('password-repeat').value;
        alert(
        'First Name: ' + firstNameAlert
        + ' | Last Name: ' + lastNameAlert
        + ' | DNI: ' + dniAlert
        + ' | Birth Date: ' + birthDateAlert
        + ' | Telephone: ' + telephoneAlert
        + ' | Address: ' + addressAlert
        + ' | Region: ' + regionAlert
        + ' | Postal Code: ' + postalCodeAlert
        + ' | Email: ' + emailAlert
        + ' | Password: ' + passwordAlert
        + ' | Password repeat: ' + passwordRepeatAlert);

        localStorage.setItem('firstName', firstNameAlert);
        localStorage.setItem('lastName', lastNameAlert);
        localStorage.setItem('dni', dniAlert);
        localStorage.setItem('birthDateAlert', birthDateAlert);
        localStorage.setItem('telephone', telephoneAlert);
        localStorage.setItem('address', addressAlert);
        localStorage.setItem('region', regionAlert);
        localStorage.setItem('postalCode', postalCodeAlert);
        localStorage.setItem('email', emailAlert);
        localStorage.setItem('password', passwordAlert);
        localStorage.setItem('passwordRepeat', passwordRepeatAlert);
    }
}

function firstNameClearError(){
    document.getElementById('first-name-error-msg').innerText = '';
}

function lastNameClearError(){
    document.getElementById('last-name-error-msg').innerText = '';
}

function dniClearError(){
    document.getElementById('dni-error-msg').innerText = '';
}

function birthDateClearError(){
    document.getElementById('birth-date-error-msg').innerText= '';
}

function telephoneClearError(){
    document.getElementById('telephone-error-msg').innerText= '';
}

function addressClearError(){
    document.getElementById('address-error-msg').innerText= '';
}

function regionClearError(){
    document.getElementById('region-error-msg').innerText= '';
}

function postalCodeClearError(){
    document.getElementById('postal-code-error-msg').innerText= '';
}

function emailClearError(){
    document.getElementById('email-error-msg').innerText= '';
}

function passwordClearError(){
    document.getElementById('password-error-msg').innerText= '';
}

function passwordRepeatClearError(){
    document.getElementById('password-repeat-error-msg').innerText= '';
}


function onlyLetters(string){
    var stringLow = string.toLowerCase();
    var i = 0;
    var allLetters = true;
    while (allLetters && i < stringLow.length){
        if (stringLow.charCodeAt(i) < 97 || stringLow.charCodeAt(i) > 122){
            allLetters = false;
        }
        i++;
    }
    return allLetters;
}

function onlyNumbers(string){
    var i=0;
    var allNumbers = true;
    while (allNumbers && i < string.length){
        if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57){
            allNumbers = false;
        }
        i++;
    }
    return allNumbers;
}

function hasNumbersAndLetters(string){
    var stringLow = string.toLowerCase();
    var i = 0;
    var number = false;
    var letter = false;
    while (i < stringLow.length && !(letter && number)) {
        if (stringLow.charCodeAt(i) >= 48 && stringLow.charCodeAt(i) <= 57){
            number = true;
        }
        else if (stringLow.charCodeAt(i) >= 97 && stringLow.charCodeAt(i) <= 122){
            letter = true;
        }
        i++;
    }
    return number && letter;
}

function isAlphanumeric(string){
    var stringLow = string.toLowerCase();
    var stringLowNoSpaces = stringLow.split(' ').join('');

    if (stringLowNoSpaces.length === 0){
        return false;
    }
    else {
        var i = 0 ;
        while (i < stringLowNoSpaces.length){
            if (!isNumber(stringLowNoSpaces[i]) && !isLetter(stringLowNoSpaces[i])){
                return false;
            }
            else {
                i++;
            }
        }
        return true;
    }
}

function isNumber(character){
    var i=0;
    if (character.length != 1){
        return false;
    }
    else if (character.charCodeAt(i) >= 48 && character.charCodeAt(i) <= 57){
        return true;
    }
    else {
        return false;
    }
}

function isLetter(character){
    if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122){
        return true;
    }
    else {
        return false;
    }
}

function hasNLetters(string,n){
    var i = 0;
    var nLetters = 0;

    while (nLetters < n && i < string.length){
        if (isLetter(string[i])){
            nLetters++;
        }
        i++;
    }
    if (nLetters >= n){
        return true;
    }
    else {
        return false;
    }
}