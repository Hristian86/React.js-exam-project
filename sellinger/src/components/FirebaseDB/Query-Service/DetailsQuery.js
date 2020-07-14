import React, { Component } from 'react';
import fire from '../../FirebaseAuth/Config';

export default class DetailsQuery extends Component {
    constructor(props) {
        super(props)

    }

    getDetails = async (id) => {
        
        const currUser = fire.auth().currentUser;

        const firestore = fire.firestore();
        const db = firestore.collection('Posts').doc(id); //search by id
        const doc = await db.get();
        const datas = doc.data();
        // console.log(datas);

        return datas
    }
}