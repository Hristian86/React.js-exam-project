import React, { Component } from 'react';
import setCookie from '../Cookioes/SetCookie';
import url from '../BaseUrl/BaseUrl';
import './style.css';

export default class Logout extends Component {

    logOutHandle = () => {
        let result = fetch(url("logout"), {
            "method": "POST"
        })
            .catch(err => {
                console.log(err);
            });

        setCookie("user", null, -1);
        setCookie("token", null, -1);
    }


    render() {
        this.logOutHandle();
        //fire.auth().signOut();
        return (
            <div className="text-center loading">
                Successfully loged out
            </div>
        )
    }
}