import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';
import UpdateUser from "./UpdateUser";
import { useHistory, Redirect } from 'react-router';
import url from "../BaseUrl/BaseUrl";
import getCookie from "../Cookies/GetCookie";
import getUserByToken from "./GetUserByToken";
import './style.css';
import setCookie from "../Cookies/SetCookie";
import style from './style.module.css';

export default class Manage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            procesing: false
        }

    }

    async componentWillUpdate() {
        if (!this.state.loadedProfile) {
            this.setState({
                loadedProfile: true
            });
            await this.getUserProfile();
        }
    }

    getUserProfile = async () => {

        const user = await getUserByToken();
        console.log(user.error);

        if (user.error == "Unauthorized") {
            this.setState({
                redirect: true
            });
        }

        if (await user) {
            //console.log(user);
            if (await user.displayName) {
                setCookie("cheked", "", 5);
            }
            this.setState({
                user: await user
            })
            //return await user;
        } else {
            this.setState({
                user: null
            })
            //return null;
        }
    }

    updateProfile = async (e) => {
        this.setState({
            procesing: true
        });

        e.preventDefault();
        let error = document.getElementById('errors');
        error.innerHTML = "Procesing...";
        const { history } = this.props;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;

        try {

            if (email.length > 4 || username.length > 4 || photoURL.length > 4) {

                const result = await UpdateUser(username, photoURL);
                error.innerHTML = await result;
                setCookie("user_name", null, -1);
                setCookie("cheked", "", 5);
                setTimeout(function () {
                    window.location.reload(false);
                }, 700);
            } else {
                //if (email.length < 4) {
                //    this.setState({
                //        procesing: false
                //    });
                //    error.innerHTML = "Email addres lenght must be at least 4 symbols";

                //} else
                if (username.length < 5) {
                    this.setState({
                        procesing: false
                    });

                    error.innerHTML = "Username length must be at least 5 symbols";

                } else if (photoURL.length < 5) {
                    this.setState({
                        procesing: false
                    });

                    error.innerHTML = "PhotoURL length must be at least 5 symbols";
                }
            }

        } catch (e) {
            this.setState({
                procesing: false
            });
            error.innerHTML = "Invalid Input";
        }
    }

    render() {

        let manageProfile = this.state.user ? <div>

            <h3 className="logo">Manage Profile</h3>

            <h3 id="errors" className="text-danger text-center error"></h3>
            <div className="container d-sm-flex justify-content-center manage-profile ">

                <form className="registerForm" onSubmit={this.updateProfile}>

                    <h3>Username</h3>
                    <FormControl type="text" className="passwordInput" maxLength="30" placeholder={this.state.user ? this.state.user.displayName : ""} name="username" />

                    <h3>Email</h3>
                    <FormControl className="userInput" type="email" disabled name="email" placeholder={this.state.user ? this.state.user.email : ""} />


                    <h3>Photo image</h3>
                    <FormControl type="text" className="passwordInput" maxLength="250" placeholder={this.state.user ? this.state.user.imageURL : ""} name="photo" />

                    <h3></h3>
                    {this.state.procesing ? <em>Loading...</em> : <input type="submit" value="Apply changes" className="btn btn-primary buttons" />}

                </form>
                <img className="image-holder" src={this.state.user ? this.state.user.imageURL : ""} />
            </div>

            <div className="spacer"></div>
        </div> : <div className="loading">Loading...</div>

        return (
            <div>
                {this.state.redirect ? <Redirect to="/Auth/LogIn" /> : null}
                {manageProfile}
            </div>
        )
    }
}