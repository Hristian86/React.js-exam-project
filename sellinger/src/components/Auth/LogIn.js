import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import fire from '../FirebaseAuth/Config';
import Home from '../Home';
import LogInSuccess from './LogInSuccess';
import { Redirect, useHistory } from 'react-router';
import setCookie, { setCookieUser, setCookieToken } from '../Cookioes/SetCookie';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.liks = [];

        this.state = {
            loading: false
        }
    }


    loginFunc = async (e) => {
        this.setState({
            loading: true
        });

        e.preventDefault();
        let error = document.getElementById('errors');
        error.innerHTML = "Procesing...";
        const { history } = this.props;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {

            if (email.length > 5 && password.length > 5) {

                let credentials;
                let responce = await fire.auth().signInWithEmailAndPassword(email, password)
                    .then(resp => {
                        credentials = resp
                    })
                    .catch(err => console.log(err));

                if (await credentials) {
                    const token = credentials.user.xa;
                    const user = credentials.user.email;

                    if (credentials.user.displayName) {
                        setCookie('userName', credentials.user.displayName, 5);
                    }
                    setCookieUser(user);
                    setCookieToken(token);
                    error.innerHTML = "Success";

                    setTimeout(function () {
                        history.push('/');
                        window.location.reload(false);
                    }, 700);
                }

            } else {
                if (email.length < 6) {
                    this.setState({
                        loading: false
                    });
                    error.innerHTML = "Email addres lenght must be at least 6 symbols";

                } else if (password.length < 6) {
                    this.setState({
                        loading: false
                    });
                    error.innerHTML = "Password length must be at least 6 symbols";

                }
            }

        } catch (e) {
            this.setState({
                loading: false
            });
            error.innerHTML = "Invalid Input";
        }

    }

    render() {



        return (<div>
            <div className="backgrounds">
                <h3 className="logo">Log in</h3>

                <h3 id="errors" className="text-danger text-center error"></h3>

                <div className="container d-flex justify-content-center">

                    <form className="registerForm" onSubmit={this.loginFunc}>

                        <h3>Email</h3>
                        <FormControl className="userInput" type="Email" name="email" placeholder="Email" />

                        <h3>Password</h3>
                        <FormControl type="password" className="passwordInput" placeholder="password" name="password" />

                        <h3></h3>
                        {this.state.loading ? <em>Loading...</em> : <input type="submit" value="Log in" className="btn btn-primary buttons" />}

                    </form>

                    <div className="spacer"></div>
                </div>
            </div>

        </div>)
    }
}