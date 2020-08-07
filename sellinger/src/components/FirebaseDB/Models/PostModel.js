import React from 'react';

const PostModel = (content, currUser, subject, image, phone, email, price, city, address, uid) => {
    try {

        let pLoad = {
            "content": content,
            "createdOn": new Date(),
            "id": uid,
            "userId": currUser.uid,
            "subject": subject,
            "image": image,
            "phone": phone,
            "email": currUser.email,
            "price": price,
            "city": city,
            "address": address,
            "name": currUser.displayName,
            "photoURL": currUser.photoURL
        };

        return pLoad;
    } catch (e) {
        console.log(e);
    }
}

export default PostModel