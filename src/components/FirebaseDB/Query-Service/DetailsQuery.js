import React, { Component } from 'react';
import url from '../../BaseUrl/BaseUrl';

export default class DetailsQuery extends Component {
    constructor(props) {
        super(props)

    }

    getDetails = async (id) => {
        try {

            let payload = {
                "id": id
            };

            let result = await fetch(url("detailsbyid"), {
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