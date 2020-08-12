import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import ProductLeyout from '../Products/ProductLayout';

export default class Searching extends Component {
    constructor(props){
        super(props);

    }
    
    render() {
        //const paramId = this.props.match.params.id;
        //<ProductLeyout state={this.state.search} />
        console.log(this.props);
        return ( 
        
            <div>
                <h3>results</h3>
                <ProductLeyout state={this.props.search} />
            </div>

        )
    }
}