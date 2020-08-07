import React, { Component } from 'react';
import './style.css';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';
import fire from '../FirebaseAuth/Config';

export default class Successfully extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image1: null,
            image2: null,
            image3: null,
            imagesNames: [],
            imageURLs: [],
            loading: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });

        const id = this.props.uid;

        if ((this.state.image1 != null && this.state.image1 != undefined)
            && (this.state.image2 != null && this.state.image2 != undefined)
            && (this.state.image3 != null && this.state.image3 != undefined)) {

            this.setState({
                loading: true
            });

            let imageCollection = [];
            imageCollection.push(this.state.image1);
            imageCollection.push(this.state.image2);
            imageCollection.push(this.state.image3);

            //console.log(imageCollection);

            for (let index = 0; index < imageCollection.length; index++) {

                const image = imageCollection[index];
                console.log(image);
                let randomImageName = Math.floor(Math.random() * 10000);
                let splitImage = image.name.split('.');
                const addedRandpm = splitImage[0] + randomImageName;
                const imageNameResult = addedRandpm + "." + splitImage[1];
                console.log(imageNameResult);

                const storage = fire.storage().ref();
                const uploadTask = storage.child(`images/${id}/${imageNameResult}`).put(image);
                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    error => {
                        console.log(error)
                    },
                    () => {
                        storage.child(`images/${id}/${imageNameResult}`).getDownloadURL().then(url => {
                            //save into posts
                            if (url) {

                                let createQuery = new CreateQuery();
                                createQuery.AddPictures(url, id);

                                let data = this.state.imageURLs;
                                data.push(url);
                                this.setState({
                                    imageURLs: data
                                })
                            }

                            //    console.log(this.state.imageURLs);
                        })
                    }
                )

            }
        } else {
            setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 700)
        }

    }

    handleImage1 = (e) => {
        if (e.target.files[0]) {

            //let data = this.state.imagesNames;
            //data.push(e.target.files[0]);

            this.setState({
                image1: e.target.files[0]
            });
        }
        console.log(this.state.image1);
    }

    handleImage2 = (e) => {
        if (e.target.files[0]) {

            //let data = this.state.imagesNames;
            //data.push(e.target.files[0]);

            this.setState({
                image2: e.target.files[0]
            });
        }
        console.log(this.state.image2);
    }

    handleImage3 = (e) => {
        if (e.target.files[0]) {

            //let data = this.state.imagesNames;
            //data.push(e.target.files[0]);

            this.setState({
                image3: e.target.files[0]
            });
        }
        console.log(this.state.image3);
    }

    render() {

        return (<div> {this.state.imageURLs.length == 3 ? <div className="onSuccess"> Successfully</div> :
            <form onSubmit={this.handleSubmit} className="onSuccess text-center">

                <input type="file" onChange={this.handleImage1} />
                <input type="file" onChange={this.handleImage2} />
                <input type="file" onChange={this.handleImage3} />

                {this.state.loading ? <em>Loading...</em> : <button type="submit" >Submit</button>}
            </form>}
        </div>)
    }
}