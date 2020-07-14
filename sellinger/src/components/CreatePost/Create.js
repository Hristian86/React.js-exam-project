import React, { Component } from 'react';
import Validate from './Validate';
<<<<<<< HEAD
import Successully from './Successully';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';
=======
<<<<<<< HEAD
import Successully from './Successully';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';
=======
import CreateQuery from '../FirebaseDB/CreateQuery';
import Successully from './Successully';
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
        const price = e.target.price.value;
        console.log(price);

        const isNotValidate = Validate(subject,phone,content,image,price);
        if (!isNotValidate) {

            let query = new CreateQuery();
            const responce = query.Create(subject,phone,content,image,price);
<<<<<<< HEAD
=======
=======

        const isNotValidate = Validate(subject,phone,content,image);
        if (!isNotValidate) {

            let query = new CreateQuery();
            const responce = query.Create(subject,phone,content,image);
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
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
<<<<<<< HEAD
                        
=======
<<<<<<< HEAD
                        
=======

>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
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

<<<<<<< HEAD
                    <div className="form-group w-25">
                        {/* <div className="form-check">
=======
<<<<<<< HEAD
                    <div className="form-group w-25">
                        {/* <div className="form-check">
=======
                    <div className="form-group">
                        <div className="form-check">
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" >
                                Check me out
                            </label>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
                        </div> */}
                        <label >Price</label>
                        <input type="text" className="form-control" placeholder="price" name="price" />
                        <span id="price" ></span>
<<<<<<< HEAD
=======
=======
                        </div>
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
                    </div>
                    <button type="submit" className="btn btn-primary">Create post</button>
                </form>
                }
            </div>
        )
    }
}