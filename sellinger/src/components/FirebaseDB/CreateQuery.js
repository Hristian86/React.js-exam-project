import React,{Component} from 'react'
import fire from '../FirebaseAuth/Config';
import Model from './PostModel';

export default class CreateQuery extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }



    Create = (subject,phone,content,image) => {
        const currUser = fire.auth().currentUser;
        const userId = currUser.uid;
        if (currUser) {

            try {

                let model = Model(content,currUser,subject,image,phone,currUser);
                console.log(model);
                
                const firestore = fire.firestore();
                firestore.collection('Posts').add(model)
                    .then(() => {
                        console.log('Created');
                    }).catch((err) => console.log(err));

                    return "Success";
            } catch (e) {
                console.log(e);
            }
        }
    }
}