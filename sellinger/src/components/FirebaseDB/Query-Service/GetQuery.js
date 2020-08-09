import React, { Component } from 'react';
import GetModel from '../Models/GetModel';
import url from '../../BaseUrl/BaseUrl';

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

        let arr = [];

        let data = await fetch(url("all"))
            .then(data => data.json())
            .catch(err => console.log(err));

        return data;
    }

    getSearchedItems = async (search) => {
        
    }

    getImagesbyId = async (id) => {
        
        let payload = {
            "id": id
        };
        
        let result = await fetch(url("images"), {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            });
        const data = await result;

        //console.log(data);

        return data;
    }
}