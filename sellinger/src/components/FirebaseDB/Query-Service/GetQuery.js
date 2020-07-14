import React,{Component} from 'react';
import fire from '../../FirebaseAuth/Config';
import GetModel from '../Models/GetModel';

const firebaseURL = "https://full-stack-app-a2668.firebaseio.com/.json";
const fireDbs = "https://full-stack-app-a2668.firebaseio.com/TestDB/EJxVkda1X8dPQU3KhHuO.json";
const urlLink = "https://full-stack-app-a2668.firebaseio.com/";

export default class GetQuery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            getData: [],
            loading: true,
            display: null
        }

    }

    getPosts = async () => {
        // const currUser = fire.auth().currentUser;
        let arr = [];
            const firestore = fire.firestore();
            const db = firestore.collection('Posts');
            const fr = await db.get();
            fr.forEach(doc => {
                //console.log(doc.id, ' => ', doc.data());
                arr.push(GetModel(doc));
            });

        return arr;
    }
}