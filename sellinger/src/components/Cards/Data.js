import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';

export default class data extends Component{
    // console.log(props.props.id);
    render() {

        return (<div key={this.props.props.key} className="col-4 card-style">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" className="image-style" src={this.props.props.image} />
            <Card.Body className="text-center">
                <Card.Title>{this.props.props.subject}</Card.Title>
                <Card.Text>
                    {this.props.props.content}
    </Card.Text>
                <div>Price: {this.props.props.price} $</div>
                <Button variant="primary" >Add to cart</Button>
            </Card.Body>
        </Card>
    </div>
        )   
}
}