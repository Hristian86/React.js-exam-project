import React,{Component} from 'react';
import './style.css';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';

export default class Successfully extends Component {
    constructor(props){
        super(props);

        this.state = {
            imagesNames: [],
            imageURLs: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // const image1 = e.target.image1.value;
        // const image2 = e.target.image2.value;
        // const image3 = e.target.image3.value;
        // console.log(image1);
        // console.log(image2);
        // console.log(image3);

        //const id = this.props.uid;

        //if (this.state.imagesNames.length == 3) {
            
        //    for (let index = 0; index < this.state.imagesNames.length; index++) {
        //        const image = this.state.imagesNames[index];
                
        //        const storage = fire.storage().ref();
        //        const uploadTask = storage.child(`images/${id}/${image.name}`).put(image);
        //        uploadTask.on(
        //            "state_changed",
        //            snapshot => {
        //                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //                console.log('Upload is ' + progress + '% done');
        //            },
        //            error => {
        //                console.log(error)
        //            },
        //            () => {
        //                storage.child(`images/${id}/${image.name}`).getDownloadURL().then(url => {
        //                    //save into posts
        //                    if (url) {  
                                                    
        //                        let createQuery = new CreateQuery();
        //                        createQuery.AddPictures(url, id);

        //                        let data = this.state.imageURLs;
        //                        data.push(url);
        //                            this.setState({
        //                                imageURLs: data
        //                            })
        //                        }
                                
        //                    //    console.log(this.state.imageURLs);
        //                })
        //            }
        //        )

        //    }
        //}

    }

    handleImage = (e) => {
        if (e.target.files[0]) {
            
            let data = this.state.imagesNames;
            data.push(e.target.files[0]);
            
            this.setState({
                imagesNames: data
            });
        }        
    }

    render() {
        
        return (<div> {this.state.imageURLs.length == 3 ? <div className="onSuccess"> Successfully</div> : 
        <form onSubmit={this.handleSubmit} className="onSuccess text-center">

            <input type="file" onChange={this.handleImage} />
            <input type="file" onChange={this.handleImage} />
            <input type="file" onChange={this.handleImage} />

            <button type="submit" >Submit</button>
        </form> }
        </div>)
    }
}