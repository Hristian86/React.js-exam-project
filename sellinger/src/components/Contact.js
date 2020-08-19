import React, { Component } from 'react';
import './contact.css';
import SendEmail from './EmailSender/SendEmail';

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
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const name = e.target.name.value;
        const content = e.target.content.value;
        console.log(email);
        console.log(subject);
        console.log(name);
        console.log(content);



            //fetch here
        try {

            const result = await SendEmail(email, subject, name, content);
            if (result === "email send") {
                this.setState({
                    success: true
                });
            } else {
                this.setState({
                    procesing: false
                });
            }

        } catch (e) {
            this.setState({
                procesing: false
            });
            console.log(e);
        }
    }

    render() {

        return (
            <div className="create-back">
                {/* <Successully uid={this.state.uid} /> */}
                {this.state.procesing ? <span id="message" className="procesing">Procesing...</span> :


                    <form className="create-post" onSubmit={this.submitHandler}>

                        <div className="form-group">
                            <label >Email *</label>
                            <input type="text" maxLength="100" minLength="4" className="form-control" placeholder="email" name="email" />
                            <span id="email" ></span>
                        </div>

                        <div className="form-group">
                            <label >Subject *</label>
                            <input type="text" maxLength="100" minLength="4" className="form-control" placeholder="subject" name="subject" />
                            <span id="subject" ></span>
                        </div>

                        <div className="form-group">
                            <label >Name *</label>
                            <input type="text" maxLength="100" minLength="4" className="form-control" placeholder="name" name="name" />
                            <span id="address" ></span>
                        </div>

                        <div className="form-group">
                            <label >Message *</label>
                            <textarea type="text" className="form-control content-holder" placeholder="description" name="content" />
                            <span id="content" ></span>
                        </div>


                        {this.state.procesing ? <em>Procesing...</em> : <button type="submit" className="btn btn-primary">Send email</button>}
                    </form>
                }
            </div>
        )
    }
}