import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    submit = (e) => {
        e.preventDefault();
        const search = e.target.searchItem.value;
        console.log(search);
        this.setState({
            redirect: true,
            search: search
        });
        return <Redirect push to={{
            pathname: `/Products/ProductList/${search}`
        }} />
    }

    render() {

        return (
            <div>
                {this.state.redirect ? <Redirect push to={{
                    pathname: `/Products/ProductList/${this.state.search}`
                }} /> :
                    <Form inline className="mr-3" onSubmit={this.submit} >
                        <FormControl type="text" placeholder="Search" name="searchItem" className="mr-sm-2" />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>}
            </div>
        )
    }
}