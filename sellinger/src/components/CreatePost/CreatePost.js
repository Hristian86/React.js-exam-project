import React, { Component } from 'react';
import { useHistory, Redirect } from 'react-router';
import Create from './Create';
import './style.css';
import getCookie from '../Cookioes/GetCookie';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false,
            setRedirect: false
        }
    }

    componentDidMount() {
        this.logedUser();
    }

    logedUser = () => {
        let currentUser = getCookie("user");
        
        if (currentUser) {
            this.setState({
                user: true
            });
        } else {
            setTimeout(() => {
                    this.setState({
                        user: false,
                        setRedirect: true
                    });
                }, 700);
        }
    }

    render() {

        return (
            <div className="">
                {this.state.user ? <Create /> : <div className="loading"><em>Loading...</em></div>}
                {this.state.setRedirect ? <Redirect to="/Auth/LogIn" /> : null}
            </div>
        )
    }
}