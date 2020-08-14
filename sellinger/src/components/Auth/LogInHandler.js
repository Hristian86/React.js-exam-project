import React from 'react';
import url from '../BaseUrl/BaseUrl';

const LogInHandler = async (payload) => {
    
    return await fetch(url("login"), {
        "method": "POST",
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(err => console.log('something is wrong with log in'));
}

export default LogInHandler;