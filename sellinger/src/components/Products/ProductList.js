import React, { Component } from 'react';
import ProductLeyout from './ProductLayout';
import './style.css';
<<<<<<< HEAD
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
=======
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f

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
<<<<<<< HEAD
        let query = new GetQuery();
        const posts = await query.getPosts();

        if (posts) {
            this.setState({ data: posts });
=======
        let fire = new fireDB();
        const resp = await fire.readFromDb();

        if (resp) {
            this.setState({ data: resp });
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
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