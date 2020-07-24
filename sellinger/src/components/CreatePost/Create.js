import React, { Component } from 'react';
import Validate from './Validate';
import Successully from './Successully';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';
import uid from 'uid';

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
        const price = e.target.price.value;
        const city = e.target.city.value;
        const address = e.target.address.value;
        console.log(price);

        const dataRef = `Posts`;
        const isNotValidate = Validate(subject,phone,content,image,price,city,address);

        this.setState({
                        success:true,
                        procesing:false
                    });

        if (!isNotValidate) {
            const _id = uid(16);
            let query = new CreateQuery();
            const responce = query.Create(dataRef,subject,phone,content,image,price,city,address,_id);
            if (responce === onSuccessing) {
                this.setState({
                    uid: _id
                })
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
            {/* <Successully uid={this.state.uid} /> */}
                {this.state.procesing ? <span id="message" className="message">Procesing...</span> : null}

                {this.state.success ? <Successully uid={this.state.uid} /> : 
                <form className="create-post" onSubmit={this.submitHandler}>
                
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Subject *</label>
                            <input type="text" className="form-control" placeholder="subject" name="subject" />
                            <span id="subject" ></span>
                        </div>
                        
                        <div className="form-group col-md-6">
                            <label >Phone number *</label>
                            <input type="text" className="form-control" placeholder="phone number" name="phone" />
                            <span id="phone" ></span>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>City *</label>
                            <input type="text" className="form-control" placeholder="city" name="city" />
                            <span id="city" ></span>
                        </div>

                        <div className="form-group col-md-6">
                            {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" >
                                    Check me out
                                </label>
                            </div> */}
                            <label >Price *</label>
                            <input type="text" className="form-control" placeholder="price" name="price" />
                            <span id="price" ></span>
                        </div>
                        
                    </div>

                    <div className="form-group">
                        <label >Address *</label>
                        <input type="text" className="form-control" placeholder="address" name="address" />
                        <span id="address" ></span>
                    </div>

                    <div className="form-group">
                        <label >Description *</label>
                        <textarea type="text" className="form-control content-holder" placeholder="description" name="content" />
                        <span id="content" ></span>
                    </div>
                                        
                    <div className="form-group">
                        <label >Image *</label>
                        <input type="text" className="form-control" placeholder="image link" name="image" />
                        <span id="image" ></span>
                    </div>

                    <button type="submit" className="btn btn-primary">Create post</button>
                </form>
                }
            </div>
        )
    }
}