import React,{Component} from 'react'

export default class CreateQuery extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    Create = async (model,url,token) => {
        return await fetch(url("create"), {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }, body: JSON.stringify(model)
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            });
    }
}