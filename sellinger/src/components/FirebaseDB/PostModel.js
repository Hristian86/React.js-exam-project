import React from 'react';

const PostModel = (content,currUser,subject,image,phone,email) => {
    
    let pLoad = {
        "content": content,
        "createdOn": new Date(),
        "id": "123",
        "userId": currUser.uid,
        "subject": subject,
        "image": image,
        "phone": phone,
        "email": currUser.email
    };
    
    return pLoad;
}

export default PostModel