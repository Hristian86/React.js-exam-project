import React, { Component } from 'react';
import getUserByToken, { sendChanges } from './GetUserByToken';

const UpdateUser = async (user, photo) => {

    var currUser = await getUserByToken();

    try {
        if (photo.length > 3 && await currUser.imageURL !== photo) {
            
            const result = await sendChanges(null, photo);
            //console.log(await result);
            //console.log(currUser.imageURL);

        } if (user.length > 3 && await currUser.displayName !== user) {
            
            const result = await sendChanges(user, null);
            //console.log(currUser.displayName);
        }
        return "Success";
    } catch (e) {
        console.log(e)
        return "Error";
    }
}

export default UpdateUser