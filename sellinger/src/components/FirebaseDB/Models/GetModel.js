import React from 'react';

const GetModel = (doc) => {
    let obj = {
        "content": doc.data().content,
        "createdOn": doc.data().createdOn.toString(),
        "id": doc.id,
        "userId": doc.data().userId,
        "subject": doc.data().subject,
        "image":doc.data().image,
        "price":doc.data().price,
        "address":doc.data().address,
        "city":doc.data().city,
        "name":doc.data().name,
        "photoURL":doc.data().photoURL
    }
    
    return obj;
}

export default GetModel