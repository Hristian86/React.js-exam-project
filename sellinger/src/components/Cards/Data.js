import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import { Redirect } from 'react-router/cjs/react-router.min';

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
    }

    render() {

            return (<form key={this.props.props.key} onSubmit={this.redirectToDetails} className="col-4 card-style">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" className="image-style" src={this.props.props.image} />
            <Card.Body className="text-center">
                <Card.Title>{this.props.props.subject}</Card.Title>
                <Card.Text>
                    {this.props.props.city}
                </Card.Text>
                    <div className="mt-0">Price: {this.props.props.price} $</div>
                    <input type="hidden" value={this.props.props.id} name="keys" />
                <Button variant="primary" type="submit" >Details</Button>
            </Card.Body>
        </Card>
    </form>
        )   
    }
}