import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Data from './Data';
import './style.css';

export default class Cards extends Component {

    render() {

        var cardsSeedArray = [];
        for (var i = 0; i < 3; i++) {
            cardsSeedArray.push(<Data key={i} />);
        }

        return (
            <div className="container d-flex justify-content-center cards-style">

                <div className="row">
                    {cardsSeedArray.map(card => card)}
                </div>
            </div>
            )
    }
}