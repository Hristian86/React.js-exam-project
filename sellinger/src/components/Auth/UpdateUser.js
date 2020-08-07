import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';
import setCookie from '../Cookioes/SetCookie';

const UpdateUser = (user, photo) => {

    var currUser = fire.auth().currentUser;

    try {
        if (photo.length > 3 && currUser.photoURL !== photo) {
           
            currUser.updateProfile({
                photoURL: photo
            })
                .then(upd => upd)
                .catch(err => console.log(err));
            //console.log(currUser.photoURL);
            

        } else if (user.length > 3 && currUser.displayName !== user) {
            setCookie('userName', null, -1);

            currUser.updateProfile({
                displayName: user
            })
                .then(upd => upd)
                .catch(err => console.log(err));
            //console.log(currUser.displayName);

            setCookie('userName', user, 5);
        }
        return "Success";
    } catch (e) {
        console.log(e)
        return "Error";
    }
}

export default UpdateUser