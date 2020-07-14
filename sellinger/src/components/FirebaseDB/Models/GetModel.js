import React from 'react';

const GetModel = (doc) => {
    let obj = {
        "content": doc.data().content,
        "createdOn": doc.data().createdOn.toString(),
        "id": doc.id,
        "userId": doc.data().userId,
        "subject": doc.data().subject,
        "image":doc.data().image,
        "price":doc.data().price
    }
    
    return obj;
}

export default GetModel