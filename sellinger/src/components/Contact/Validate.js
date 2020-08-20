import React from 'react';

const Validate = (subject, content, name, email) => {
    let chek = false;
    let errorSubject = document.getElementById('subject');
    let errorContent = document.getElementById('content');
    let errorName = document.getElementById('name');
    let errorEmail = document.getElementById('email');
    errorSubject.innerHTML = null;
    errorContent.innerHTML = null;
    errorName.innerHTML = null;
    errorEmail.innerHTML = null;


    if (subject.length < 4) {
        errorSubject.innerHTML = "Length must at least 4 symbols";
        chek = true;
    }

    if (content.length < 4) {
        errorContent.innerHTML = "Length must at least 4 symbols";
        chek = true;
    }

    if (name.length < 4) {
        errorName.innerHTML = "Length must at least 4 symbols";
        chek = true;
    }

    if (email.length < 4 || !validateEmail(email)) {
        if (email.length < 4) {
            errorEmail.innerHTML = "Length must at least 4 symbols";
        } else {
            errorEmail.innerHTML = "Invalid email";
        }
        chek = true;
    }

    if (!chek) {
        return false;
    }
    return true;
}

export const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default Validate