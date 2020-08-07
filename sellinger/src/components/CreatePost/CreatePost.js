import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';
import { useHistory, Redirect } from 'react-router';
import Create from './Create';
import './style.css';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false,
            setRedirect: false
        }
        this.authListener = this.authListener.bind(this);
    }

    async componentDidMount() {
        await this.authListener();
    }

    async authListener() {
        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                if (user.displayName == "pencho") {
                    this.setState({
                        user: true
                    });
                }
            } else {
                setTimeout(() => {
                    this.setState({
                        user: false,
                        setRedirect: true
                    });
                }, 700);
            }
        });
        return users;
    }

    render() {

        return (
            <div className="">

                {this.state.user ? <Create /> : <div className="loading"><em>Permission denied...</em></div>}
                {this.state.setRedirect ? <Redirect to="/Auth/LogIn" /> : null}
            </div>
        )
    }
}