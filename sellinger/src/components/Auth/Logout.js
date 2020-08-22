import React, { Component } from 'react';
import setCookie from '../Cookies/SetCookie';
import url from '../BaseUrl/BaseUrl';
import './style.css';

export default class Logout extends Component {

    logOutHandle = () => {
        setCookie("user", null, -1);
        setCookie("token", null, -1);
        setCookie("user_name", null, -1);
        setCookie("cheked", null, -1);
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