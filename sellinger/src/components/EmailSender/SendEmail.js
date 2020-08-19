import React from 'react';

const SendEmail = async (email, subject, name, content) => {

    let payload = {
        Email: email,
        Subject: subject,
        Content: content,
        Name: name
    };

    const result = fetch("https://localhost:44342/api/Contacts", {
        "method": "POST",
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
    console.log(await result);
}

export default SendEmail;