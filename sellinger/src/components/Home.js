import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';
import login from './Auth/LogIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// import fireDB from './FirebaseDB/fireDB';
import dataS from './Cards/dataS';
import Tests from './Tests';
import './HearthStoneCards/Hearth.css'
import propsy from './SendingProps';
import Search from './SearchBar/Search';
import HomeCom from './Home-Components/HomeCom';
import GetQuery from './FirebaseDB/Query-Service/GetQuery';

export const UserContext = createContext({ user: null });

export default class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            image: null
        }
    }

    handleImage = (e) => {
        if (e.target.files[0]) {
            this.setState({
                image: e.target.files[0]
            })
        }
    }

    //upload = () => {
    //    if (this.state.image) {
    //        const image = this.state.image;
    //        const storage = fire.storage().ref();
    //       const uploadTask = storage.child(`images/${image.name}`).put(image);
    //       uploadTask.on(
    //           "state_changed",
    //           snapshot => {
    //            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //            console.log('Upload is ' + progress + '% done');
    //           },
    //           error => {
    //               console.log(error)
    //           },
    //           () => {
    //               storage.child(`images/${image.name}`).getDownloadURL().then(url => {
    //                   //save into posts
    //                   console.log(url);
    //               })
    //           }
    //       )
    //    }
    //}

    render() {
        // if(this.state.image) {
        //      console.log(this.state.image) 
        //     }
        return (
            <div>
                {/* <input type="file" onChange={this.handleImage} />
                <button onClick={this.upload} >Upload</button> */}
                <HomeCom />
                <div className="spacer"></div>
            </div>
        )
    }
}