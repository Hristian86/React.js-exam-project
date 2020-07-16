import React from 'react';

const PostModel = (content,currUser,subject,image,phone,email,price,city,address) => {
    
    let pLoad = {
        "content": content,
        "createdOn": new Date(),
        "id": "123",
        "userId": currUser.uid,
        "subject": subject,
        "image": image,
        "phone": phone,
        "email": currUser.email,
        "price": price,
        "city":city,
        "address":address,
        "name":currUser.displayName,
        "photoURL":currUser.photoURL
    };
    
    return pLoad;
}

export default PostModel