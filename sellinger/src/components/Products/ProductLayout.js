import React, { Component } from 'react';
import Posts from './Posts';

export default class ProductLeyout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    render() {

        let arr = [];
        let display = [];
        arr = this.props.state;
        if (arr != undefined) {
            
            display = arr.map(post => <Posts props={post} key={post.id} />)

            //for (var i = 0; i < arr.length; i++) {
            //    display.push(<Posts props={arr[i]} />)
            //}
        }

        return (
            <div>
                {this.props.state ? display.map(post => post) : <em>Loading...</em>}
            </div>
        )
    }
}