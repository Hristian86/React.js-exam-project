import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';
import setCookie from '../Cookioes/SetCookie';
import './style.css';
 
export default class Logout extends Component {


    render() {
        fire.auth().signOut();
        setCookie("user", null, -1);
        setCookie("token", null, -1);
        setCookie("userName", null, -1);
        return (
            <div className="text-center log-out">
                Successfully loged out
            </div>
            )
    }
}