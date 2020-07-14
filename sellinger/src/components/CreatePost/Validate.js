import React from 'react';

const Validate = (subject,phone,content,image,price) => {
    let chek = false;
    if (isNaN(price) || price.length < 1) {
        let error = document.getElementById('price');
        error.innerHTML = "The input is not a number";
        chek = true;
    }
    if (subject.length < 3) {
        let error = document.getElementById('subject');
        error.innerHTML = "Length must be more that 2 symbols";
        chek = true;
    }
    if (phone.length < 3 || isNaN(phone)) {
        let error = document.getElementById('phone');
        error.innerHTML = "The input is not a phone number";
        chek = true;
    }
    if (content.length < 3) {
        let error = document.getElementById('content');
        error.innerHTML = "Length must be more that 2 symbols";
        chek = true;
    }
    if (image.length < 3) {
        let error = document.getElementById('image');
        error.innerHTML = "Length must be more that 2 symbols";
        chek = true;
    }
    if (!chek) {
        return false;
    }
    return true;
}

export default Validate