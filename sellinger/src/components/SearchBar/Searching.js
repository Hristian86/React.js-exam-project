import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import ProductLeyout from '../Products/ProductLayout';

export default class Searching extends Component {
    constructor(props){
        super(props);

    }
    
    render() {
        let cont = this.props.state;
        if (cont) {   
            console.log(cont[0].content);
        }
        
        return ( 
        
            <div>
                {this.props.state ? <ProductLeyout state={this.props.state} /> : null}
            </div>

        )
    }
}