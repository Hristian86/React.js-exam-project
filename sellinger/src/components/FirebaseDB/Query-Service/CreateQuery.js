import React,{Component} from 'react'
import Model from '../Models/PostModel';

export default class CreateQuery extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }



    Create = (dataRef,subject,phone,content,image,price,city,address,uid) => {
        const currUser = "";
        const userId = currUser.uid;
        //if (currUser) {

            try {

                let model = Model(content,currUser,subject,image,phone,currUser,price,city,address,uid);
                console.log(model);

                //let result = await fetch(url("create"), {
                //    "method": "POST",
                //    "headers": {
                //        'Accept': 'application/json',
                //        'Content-Type': 'application/json'
                //    }, body: JSON.stringify(model)
                //})
                //    .then(res => res.json())
                //    .catch(err => {
                //        console.log(err);
                //    });
                //const data = await result;

                    //return "Success";
            } catch (e) {
                console.log(e);
            }
        //}
    }

    //AddPictures = (image1, id) =>{
    //    const currUser = fire.auth().currentUser;
    //    const userId = currUser.uid;
    //    if (currUser) {
    //        const dataReference = 'images';
    //        try {
                
    //                let payload1 = {
    //                    "id": id,
    //                    "userId": userId,
    //                    "image": image1
    //                }
                    
    //                const firestore = fire.firestore();
    //                firestore.collection(dataReference).add(payload1)
    //                .then(() => {
    //                    console.log('Created');
    //                }).catch((err) => console.log(err));
                    
                    
    //                // let payload2 = {
    //                //     "id": id,
    //                //     "userId": userId,
    //                //     "image": image2
    //                // }
                    
    //                // firestore.collection(dataReference).add(payload2)
    //                // .then(() => {
    //                //     console.log('Created');
    //                // }).catch((err) => console.log(err));

                    
    //                // let payload3 = {
    //                //     "id": id,
    //                //     "userId": userId,
    //                //     "image": image3
    //                // }
                    
    //                // firestore.collection(dataReference).add(payload3)
    //                // .then(() => {
    //                //     console.log('Created');
    //                // }).catch((err) => console.log(err));
                
    //                return "Success";
    //        } catch (e) {
    //            console.log(e);
    //        }
    //    } else {
    //        return "Not logged"
    //    }
    //}
}