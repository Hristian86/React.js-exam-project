import React,{Component} from 'react';
import fire from '../../FirebaseAuth/Config';
import GetModel from '../Models/GetModel';

const firebaseURL = "https://full-stack-app-a2668.firebaseio.com/.json";
const fireDbs = "https://full-stack-app-a2668.firebaseio.com/TestDB/EJxVkda1X8dPQU3KhHuO.json";
const urlLink = "https://full-stack-app-a2668.firebaseio.com/";
const collection = "Posts";
const images = 'images';

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
            const db = firestore.collection(collection);
            const fr = await db.get();
            fr.forEach(doc => {
                //console.log(doc.id, ' => ', doc.data());
                arr.push(GetModel(doc));
            });

        return arr;
    }

    getSearchedItems = async (search) => {
        // let arr = [];
        //     const firestore = fire.firestore();
        //     const db = firestore.collection(collection);
        //     const searchResult = await db.where('content' '==')
        //     searchResult.forEach(doc => {
        //         //console.log(doc.id, ' => ', doc.data());
        //         arr.push(GetModel(doc));
        //     });

        // return arr;
    }

    getImagesbyId = async (id) => {
        let arr = [];
            try {
            const firestore = fire.firestore();
            const db = firestore.collection(images);
            const allImages = await db.where('id', '==', id).get();
            allImages.forEach(doc => {
                // console.log(doc.id, ' => ', doc.data());
                // arr.push(GetModel(doc));
                
                arr.push({
                    id: doc.data().id,
                    image: doc.data().image,
                    userId: doc.data().userId
                });
            });
            } catch (error) {
               console.log(error);
            }
        return arr;
    }
}