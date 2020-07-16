import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Data from './Data';
import './style.css';

export default class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        }
    }

    compare = (a,b) => {
            const bandA = a.price;
            const bandB = b.price;
          
            let comparison = 0;
            if (bandA > bandB) {
              comparison = 1;
            } else if (bandA < bandB) {
              comparison = -1;
            }
            return comparison;     
    }

    render() {
        var cardsSeedArray = [];
        let array = [];
        array = this.props.props;
        if (array != undefined || array != null) {
            
            array.sort(this.compare);
            
            for (var i = 0; i < 3; i++) {
                if (array[i] != undefined) {
                    cardsSeedArray.push(<Data props={array[i]} key={i} />);
                }
            }
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