import React from 'react';

const SendEmail = async (email, subject, name, content) => {
    try {

        let payload = {
            Email: email,
            Subject: subject,
            Content: content,
            Name: name
        };

        const result = fetch("https://mashop.herokuapp.com/api/Contacts", {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        return result

    } catch (e) {
        console.log(e);
    }
}

export default SendEmail;