import React, { Component } from 'react';
import Validate from './Validate';
import Successully from './Successully';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';
import uid from 'uid';
import url from '../BaseUrl/BaseUrl';
import getCookie from '../Cookioes/GetCookie';

var onSuccessing = "Success";

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            procesing: false,
            image: null
        }
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const subject = e.target.subject.value;
        const phone = e.target.phone.value;
        const content = e.target.content.value;
        const price = e.target.price.value;
        const city = e.target.city.value;
        const address = e.target.address.value;
        const imageFile = this.state.image;

        console.log(imageFile.name);

        const dataRef = `Posts`;
        const isNotValidate = Validate(subject, phone, content, imageFile.name, price, city, address);
        const _id = uid(16);

        if (!isNotValidate) {
            if (this.state.image) {
                this.setState({
                    procesing: true
                })
                const image = imageFile;

                const token = getCookie("token");

                let model = {
                    "subject": e.target.subject.value,
                    "phone": e.target.phone.value,
                    "content": e.target.content.value,
                    "price": e.target.price.value,
                    "city": e.target.city.value,
                    "address": e.target.address.value,
                    "imageFile": image,
                }

                let result = await fetch(url("create"), {
                    "method": "POST",
                    "headers": {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }, body: JSON.stringify(model)
                })
                    .then(res => res.json())
                    .catch(err => {
                        console.log(err);
                    });
                const data = await result;
                console.log(data);






                //const storage = fire.storage().ref();
                //const uploadTask = storage.child(`images/${_id}/${image.name}`).put(image);
                //uploadTask.on(
                //    "state_changed",
                //    snapshot => {
                //        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //        console.log('Upload is ' + progress + '% done');
                //    },
                //    error => {
                //        console.log(error)
                //    },
                //    () => {
                //        storage.child(`images/${_id}/${image.name}`).getDownloadURL().then(url => {
                //            //save into posts
                //            if (url) {


                //                let query = new CreateQuery();
                //                const responce = query.Create(dataRef, subject, phone, content, url, price, city, address, _id);
                //                if (responce === onSuccessing) {
                //                    this.setState({
                //                        uid: _id
                //                    })
                //                    this.setState({ procesing: true });
                //                    setTimeout(() => {
                //                        this.setState({
                //                            success: true,
                //                            procesing: false
                //                        });
                //                    }, 700);
                //                }
                //            }

                //            //    console.log(url);
                //        })
                //    }
                //)
            }
        }
    }

    handleImage = (e) => {
        if (e.target.files[0]) {
            this.setState({
                image: e.target.files[0]
            })
        }
    }

    render() {

        if (this.state.imageURL) {
            console.log(this.state.imageURL);
        }

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
                            <label >Image *</label><br />
                            <input type="file" onChange={this.handleImage} />
                            {/* <input type="text" className="form-control" placeholder="image link" name="image" /> */}
                            <span id="image" ></span>
                        </div>


                        <button type="submit" className="btn btn-primary">Create post</button>
                    </form>
                }
            </div>
        )
    }
}