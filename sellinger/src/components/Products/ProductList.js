import React, { Component } from 'react';
import fireDB from '../FirebaseDB/fireDB';
import ProductLeyout from './ProductLayout';
import './style.css';

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
            //console.log("test");
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

        if (this.state.data) {
            clearInterval(this.interval);
        }

        return (
            <div className="container-fluid">

                {this.state.data ? <ProductLeyout state={this.state.data} /> : <div className="loading"><em>loading....</em></div>}

            </div>
        )
    }
}