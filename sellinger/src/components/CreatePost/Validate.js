import React from 'react';

<<<<<<< HEAD
const Validate = (subject,phone,content,image,price) => {
    let chek = false;
    if (isNaN(price) || price.length < 1) {
        let error = document.getElementById('price');
        error.innerHTML = "The input is not a number";
        chek = true;
    }
=======
const Validate = (subject,phone,content,image) => {
    let chek = false;
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
    if (subject.length < 3) {
        let error = document.getElementById('subject');
        error.innerHTML = "Length must be more that 2 symbols";
        chek = true;
    }
<<<<<<< HEAD
    if (phone.length < 3 || isNaN(phone)) {
        let error = document.getElementById('phone');
        error.innerHTML = "The input is not a phone number";
=======
    if (phone.length < 3) {
        let error = document.getElementById('phone');
        error.innerHTML = "Length must be more that 2 symbols";
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
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