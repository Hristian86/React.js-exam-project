import React, {Component} from 'react';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import ProductLeyout from '../Products/ProductLayout';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import Searching from './Searching';

export default class SearchNav extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    
    searchHandle = async (e) => {
        e.preventDefault();
        const search = e.target.searchItem.value;
        console.log(search);
        const searchQuery = new GetQuery();
        let result = await searchQuery.getPosts();
        if (result) {
            let searchRes = [];
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                let containsEl = element.content.includes(search);
                if (containsEl) {
                    console.log(element);
                    searchRes.push(element);
                }
            }

            if (this.state.search == undefined) {
                this.setState({
                    search: searchRes,
                    redirect: true
                });
            }
        }
    }
    
    render() {
        
        return(
            <div>
        <Form inline className="mr-3" onSubmit={this.searchHandle} >
                <FormControl type="text" placeholder="Search" name="searchItem" className="mr-sm-2" />
                <Button type="submit" variant="outline-success">Search</Button>
                </Form>
                {this.state.search ? <Searching state={this.state.search} /> : null}
                </div>
        )
    }
}
