import React from 'react';
import './style.css';
import { Component } from 'react';
import DetailsQuery from '../FirebaseDB/DetailsQuery';
import { Redirect, useHistory } from 'react-router';
import Details from './Details';

//const Posts = (props) => {
export default class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    submitHanler = async (e) => {
        e.preventDefault();
        const productDetail = e.target.idto.value;
        //console.log(productDetail);

        let query = new DetailsQuery();
        let data = await query.getDetails(productDetail);
        if (data) {
            this.setState({ data: data });
            //console.log(data.name);
        }
    }

    render() {

        //if (this.state.data) {
        //    console.log(this.state.data);

        //    return (<Details state={this.state.data} />)
    
        //}


        return (<form onSubmit={this.submitHanler} className="card mb-4 card-style">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs d-flex justify-content-between">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="#">To be seen</a>
                    </li>

                </ul>
            </div>

            <div className="card-body d-flex justify-content-between">
                <img src={this.props.props.image} className="image-style" />

                <h5 className="card-title">{this.props.props.subject}</h5>

                <p className="card-text">{this.props.props.content}</p>

            </div>

            <input name="idto" type="hidden" value={this.props.props.id} />

            <button type="submit" className="btn btn-outline-success">Details</button>

            {this.state.data ? <Details props={this.state.data} /> : null}

        </form>)
    }
}