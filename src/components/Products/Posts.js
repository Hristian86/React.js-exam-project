import React from 'react';
import './style.css';
import { Component } from 'react';
import { Redirect, useHistory } from 'react-router';
import DetailsPage from './DetailsPage';
import DetailsQuery from '../FirebaseDB/Query-Service/DetailsQuery';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';

export default class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            isDetail:false,
            detail:null,
            detailId:null
        }
    }

    submitHanler = async (e) => {
        e.preventDefault();
        const productDetail = e.target.idto.value;

        //setting redirect to product details page
        if (productDetail) {
            this.setState({
                isDetail: true,
                detailId: productDetail
            });
        }
    }
    
    render() {
            
            return (
                <div>
                    {this.state.isDetail ? <Redirect push to={{
            pathname: `/Products/DetailsPage/${this.state.detailId}`
            //            ,
            //state: { 
            //    id: this.state.detailId,
            //    data: this.state.data,
            //    pictures: this.state.pictures
            //}
        }} /> : 

        <form onSubmit={this.submitHanler} id="products-card" className="card mb-4 mr-2 card-style col">
                <button className="btn btn-info">{this.props.props.subject ? this.props.props.subject : null}</button>

            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs d-flex justify-content-between">
                    <li className="nav-item">
                        <div className="nav-link active" >Active</div>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link active" >DETAILS</div>
                    </li>

                </ul>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col d-flex">
                        <button type="submit" className="image-button">
                        <img src={this.props.props.image} className="image-style" />
                        </button>
                        <div className="d-grid w-100">
                        <h5 className="card-title mt-2 ml-4 card-info">{this.props.props.subject} </h5>
                        <p className="d-flex justify-content-end price-post">Price: {this.props.props.price} $</p>
                        </div>
                    </div>
{/* 
                    <div className="col">
                        <p className="card-text d-flex justify-content-end content-mobile">{this.props.props.address}</p>
                        <p className="d-flex justify-content-end price-post">Price: {this.props.props.price} $</p>
                    </div> */}
                </div>
                
            </div>

            <input name="idto" type="hidden" value={this.props.props.id} id="asdasd" />

            <button type="submit" className="btn btn-success">Details</button>

            {/*{this.state.data ? <Details props={this.state.data} /> : null}*/}

        </form>
                    }
        </div>
        )
    }
}