import React, { Component } from 'react';
import Validate from './Validate';
import CreateQuery from '../FirebaseDB/CreateQuery';
import Successully from './Successully';

var onSuccessing = "Success";

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success:false,
            procesing:false
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const subject = e.target.subject.value;
        const phone = e.target.phone.value;
        const content = e.target.content.value;
        const image = e.target.image.value;

        const isNotValidate = Validate(subject,phone,content,image);
        if (!isNotValidate) {

            let query = new CreateQuery();
            const responce = query.Create(subject,phone,content,image);
            if (responce === onSuccessing) {
                
                this.setState({procesing:true});
                setTimeout(() => {
                    this.setState({
                        success:true,
                        procesing:false
                    });
                },700);
            }
        }
        // console.log(isNotValidate);
    }

    render() {
        
        return (
            <div className="create-back">
                {this.state.procesing ? <span id="message" className="message">Procesing...</span> : null}

                {this.state.success ? <Successully /> : 
                <form className="create-post" onSubmit={this.submitHandler}>
                
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Subject</label>
                            <input type="text" className="form-control" placeholder="subject" name="subject" />
                            <span id="subject" ></span>
                        </div>

                        <div className="form-group col-md-6">
                            <label >Phone number</label>
                            <input type="text" className="form-control" placeholder="phone number" name="phone" />
                            <span id="phone" ></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label >content</label>
                        <input type="text" className="form-control content-holder" placeholder="description" name="content" />
                        <span id="content" ></span>
                    </div>
                    
                    <div className="form-group">
                        <label >Image</label>
                        <input type="text" className="form-control" placeholder="image link" name="image" />
                        <span id="image" ></span>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" >
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Create post</button>
                </form>
                }
            </div>
        )
    }
}