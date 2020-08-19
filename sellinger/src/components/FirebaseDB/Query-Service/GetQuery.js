import React, { Component } from 'react';
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
        try {

            let arr = [];

            let data = await fetch(url("all"))
                .then(data => data.json())
                .catch(err => console.log(err));

            return data;

        } catch (e) {
            console.log(e);
        }
    }

    getImagesbyId = async (id) => {
        try {

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

        } catch (e) {
            console.log(e);
        }
    }
}