var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'OK';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits are allowed.';
        return false;
    }

    phoneError.innerHTML = 'OK';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    var emailError = document.getElementById('email-error');

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailRegex)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = 'OK';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var messageError = document.getElementById('message-error');
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = 'OK';
    return true;
}


function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characterrs required';
        return false;
    }
    messageError.innerHTML = 'OK';
    return true;
}

function formvalidate() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'please fix error to submit';
        return false;
    }
}



