import React, { Component } from 'react';
import fireDB from '../FirebaseDB/fireDB';
import ProductLeyout from './ProductLayout';

var counter = 0;

export default class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.data == undefined) {
                this.getItems();
            }
        }, 600);
    }

    getItems = async () => {
        let fire = new fireDB();

        const resp = await fire.readFromDb();

        if (resp) {
            this.setState({ data: resp });
        }
    }

    render() {

        return (
            <div className="container-fluid">
                {this.state.data ? <ProductLeyout state={this.state.data} /> : <em>loading....</em>}


            </div>
        )
    }
}