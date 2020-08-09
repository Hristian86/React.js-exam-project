import React, { Component } from 'react';
import ProductLeyout from './ProductLayout';
import './style.css';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';

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
        let query = new GetQuery();
        const posts = await query.getPosts();
        if (posts) {
            this.setState({ data: posts });
            // console.log(posts[0].id);
        }
    }

    render() {

        if (this.state.data) {
            clearInterval(this.interval);
        }

        if (this.props.data) {
            console.log(this.props.data);
            return (
                <div className="container-fluid">

                    {this.props.data ? <ProductLeyout state={this.props.data} /> : <div className="loading"><em>loading....</em></div> }    

                </div>
            )
        }
        
        return (
            <div className="container-fluid">

                {this.state.data ? <ProductLeyout state={this.state.data} /> : <div className="loading"><em>loading....</em></div> }

            </div>
        )
    }
}