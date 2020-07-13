import React from 'react';
import './style.css';
import { Component } from 'react';
import DetailsQuery from '../FirebaseDB/DetailsQuery';
import { Redirect, useHistory } from 'react-router';
import Details from './Details';
import DetailsPage from './DetailsPage';

//const Posts = (props) => {
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
        // console.log(productDetail);

        let query = new DetailsQuery();
        let data = await query.getDetails(productDetail);
        if (data) {
            this.setState({
                 data: data,
                 isDetail:true,
                 detailId:productDetail
                });
            //console.log(data.name);
        }
    }

    detailHandle = (e) => {
        try {
            
            if (this.state.detailId == null) {
                
                    // console.log(e);
                
            }
            // console.log(id);
                // this.setState({detail:e});
            
            
        } catch (error) {
            // console.log(error);
        }
    }
    
    render() {
        
        //if (this.state.data) {
            //    console.log(this.state.data);
            
            //    return (<Details state={this.state.data} />)
            
            //}
            
            return (
                <div>
                    {this.state.isDetail ? <Redirect to={{
            pathname: '/Products/DetailsPage',
            state: { id: this.state.detailId }
        }} /> : 

<form onSubmit={this.submitHanler} className="card mb-4 card-style">
<button className="btn btn-info" onClick={this.detailHandle(this.props.props.id)}>click</button>


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

            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img src={this.props.props.image} className="image-style" />
                    
                        <h5 className="card-title mt-2">{this.props.props.subject} </h5>
                    </div>

                    <div className="col">
                        <p className="card-text text-center content-mobile">{this.props.props.content}</p>
                    </div>
                </div>
                
            </div>

            <input name="idto" type="hidden" value={this.props.props.id} id="asdasd" />

            <button type="submit" className="btn btn-outline-success">Details</button>

            {this.state.data ? <Details props={this.state.data} /> : null}

        </form>
                    }
        </div>
        )
    }
}