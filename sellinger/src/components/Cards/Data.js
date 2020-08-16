import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import { Redirect, useHistory } from 'react-router/cjs/react-router.min';
import DetailsPage from '../Products/DetailsPage';
import HistoryRedirect from './DetailRedirect';
import LocalizationFunc from '../../Localization/LocalizationFunc';

export default class data extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }
    // console.log(props.props.id);

    redirectToDetails = async (e) => {
        e.preventDefault();
        const productDetail = e.target.keys.value;
        this.setState({
            id: productDetail
        })
        // console.log(this.props.props)
        let redir = new HistoryRedirect(this.props.props);
        // History(this.props.props);
        this.setState({
            redirecting: await redir.redirect()
        }) 
    }

    render() {
        
            return (
                <div className="card-style" >
            {this.state.redirecting ? this.state.redirecting :
            <form key={this.props.props.key} onSubmit={this.redirectToDetails} className="card-style">
        <Card id="cardis" style={{ width: '18rem' }} >
            <Card.Img variant="top" className="image-style w-100" src={this.props.props.image} />
            <Card.Body className="text-center">
                <Card.Title>{this.props.props.subject}</Card.Title>
                <Card.Text>
                    {this.props.props.city}
                </Card.Text>
                                    <div className="mt-0">{LocalizationFunc().price} {this.props.props.price} $</div>
                    <input type="hidden" value={this.props.props.id} name="keys" />
                                    <Button variant="primary" type="submit" >{LocalizationFunc().details}</Button>
            </Card.Body>
        </Card>
            </form> }
    </div>
        )   
    }
}