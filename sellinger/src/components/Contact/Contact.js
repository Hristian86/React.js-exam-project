import React, { Component } from 'react';
import './contact.css';
import SendEmail from '../EmailSender/SendEmail';
import Validate from './Validate';
import { validateEmail } from './Validate';
import ContactForm from './CntactForm';

export default class contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            procesing: false
        }
    }

    submitHandler = async (e) => {
        this.setState({
            procesing: true
        });
        e.preventDefault();
        let errorNotSendEmail = document.getElementById('notSendEmailError');
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const name = e.target.name.value;
        const content = e.target.content.value;

        //validations for the inputs
        const valid = Validate(subject, content, name, email);

        try {
            if (!valid) {
                const result = await SendEmail(email, subject, name, content);
                if (await result === "email send") {
                    this.setState({
                        success: true
                    });
                    errorNotSendEmail.innerHTML = null;
                } else {

                    errorNotSendEmail.innerHTML = 'Sorry there is a problem with mail service';

                    this.setState({
                        procesing: false
                    });
                }
            } else {
                errorNotSendEmail.innerHTML = null;
                this.setState({
                    procesing: false
                });
            }
        } catch (e) {
            this.setState({
                procesing: false
            });
            errorNotSendEmail.innerHTML = 'There was an error communicating with the server';
            console.log(e);
        }
    }

    nameHandler = (e) => {
        let errorName = document.getElementById('name');
        const name = e.target.value;
        errorName.innerHTML = null;
        if (name.length < 4) {
            errorName.innerHTML = "Length must at least 4 symbols";
        }
    }

    subjectHandler = (e) => {
        let errorSubject = document.getElementById('subject');
        const subject = e.target.value;
        errorSubject.innerHTML = null;
        if (subject.length < 4) {
            errorSubject.innerHTML = "Length must at least 4 symbols";
        }
    }

    emailHandler = (e) => {
        let errorEmail = document.getElementById('email');
        const email = e.target.value;
        errorEmail.innerHTML = null;
        
        if (email.length < 4 || !validateEmail(email)) {
            if (email.length < 4) {
                errorEmail.innerHTML = "Length must at least 4 symbols";
            } else {
                errorEmail.innerHTML = "Invalid email";
            }
        }
    }

    messageHandler = (e) => {
        let errorMessage = document.getElementById('content');
        const message = e.target.value;
        errorMessage.innerHTML = null;
        if (message.length < 4) {
            errorMessage.innerHTML = "Length must at least 4 symbols";
        }
    }

    render() {
        if (this.state.success) {
            return (
                <div className="create-bac text-center">
                    <h3 className="mt-5">You have send an email successfully</h3>
                </div>
            )
        }
        return (
            <div className="create-backs">

                {/* <Successully uid={this.state.uid} /> */}
                {/*{this.state.procesing ? <span id="message" className="procesing">Procesing...</span> :*/}

                <div className="contact-left-letters text-center">
                    <div className="contact-info-holder">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                        <h2>Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                </div>

                <form className="create-post" onSubmit={this.submitHandler}>

                    <div className="form-group">
                        <label >Name *</label>
                        <input onChange={this.nameHandler} type="text" maxLength="100" minLength="4" className="form-control" placeholder="name" name="name" />
                        <span id="name" ></span>
                    </div>

                    <div className="form-group">
                        <label >Subject *</label>
                        <input onChange={this.subjectHandler} type="text" maxLength="100" minLength="4" className="form-control" placeholder="subject" name="subject" />
                        <span id="subject" ></span>
                    </div>

                    <div className="form-group">
                        <label >Email *</label>
                        <input onChange={this.emailHandler} type="text" maxLength="100" minLength="4" className="form-control" placeholder="email" name="email" />
                        <span id="email" ></span>
                    </div>

                    <div className="form-group">
                        <label >Message *</label>
                        <textarea type="text" onChange={this.messageHandler} className="form-control content-holder" placeholder="description" name="content" />
                        <span id="content" ></span>
                    </div>


                    {this.state.procesing ? <div className="proces"><em>Procesing...</em></div> : <button type="submit" className="btn btn-primary">Send email</button>}
                    <span id="notSendEmailError" className="ml-3"></span>
                </form>

            </div>
        )
    }
}