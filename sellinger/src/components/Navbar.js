import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './About';
import Register from './Auth/Register';
import LogIn from './Auth/LogIn';
import RegAuth from './Auth/RegAuth';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';
import propsy from './SendingProps';
import ProductList from './Products/ProductList';
import CreatePost from './CreatePost/CreatePost';
import GetQuery from './FirebaseDB/Query-Service/GetQuery';
import ProductLeyout from './Products/ProductLayout';

export default class navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoget: false
        }
        
        this.authListener = this.authListener.bind(this);
    }


    async componentDidMount() {
        await this.authListener();
    }

    async authListener() {
        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user,
                    isLoget: true
                });
            } else {
                this.setState = null;
            }
        });

        return users;
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

    prevDef(e) {
        e.preventDefault();
    }

    render() {
        let cheks = false;
        let usr = this.state.user;

        propsy(this.state.user); //component test from function

        let displayName = null;
        let token = null;
        if (usr) {
            cheks = true;
            displayName = usr.displayName;
            token = usr.refreshToken;
            localStorage.setItem("userToken", token);
            var localuser = localStorage.getItem("userToken");
            var currUser = fire.auth().currentUser;

            //currUser.updateProfile({
            //    displayName: "icaka",
            //    photoURL: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png"
            //})
            //    .then(upd => console.log(upd))
            //    .catch(err => console.log(err));
            //console.log(currUser.displayName);
            //console.log(currUser.photoURL);

            var results = localuser === currUser.refreshToken ? "true" : "false";
            //console.log(results);




        } else {
            cheks = false;
        }
        
        // if(this.state.redirect) {
        //     return <ProductLeyout state={this.state.search}  />
        // }
        return (
            <Navbar bg="light" className="nav-bar-background" expand="lg">
                <Navbar.Brand href="/" onClick={() => this.prevDef}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="/Products/ProductList"  onClick={() => this.prevDef}>Products</Nav.Link>

                        <Nav.Link href="/About" onClick={() => this.prevDef}>About</Nav.Link>

                        <Nav.Link href="/Contact" onClick={() => this.prevDef}>Contact</Nav.Link>

                        <Nav.Link href="/components/HearthStoneCards/HearthstoneCard" onClick={() => this.prevDef}>Hearthstone</Nav.Link>

                        <Nav.Link href="/CreatePost/CreatePost" onClick={() => this.prevDef}>Create a post</Nav.Link>

                    </Nav>
                    <Form inline className="mr-3" onSubmit={this.searchHandle} >
                        <FormControl type="text" placeholder="Search" name="searchItem" className="mr-sm-2" />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>

                    {this.state.isLoget ? <Nav.Link href="/Auth/Manage" className="text-info" onClick={() => this.prevDef}>{displayName !== null ? displayName+"'s" : ""} management</Nav.Link> :
                        <Nav.Link href="/Auth/Register" className="text-info" onClick={() => this.prevDef}>Register</Nav.Link>}

                    {this.state.isLoget ? <Nav.Link href="/Auth/Logout" className="mr-3 text-info" onSubmit={() => this.prevDef}>Log out</Nav.Link> : <Nav.Link href="/Auth/LogIn" className="mr-3 text-info" onClick={() => this.prevDef}>LogIn</Nav.Link>}

                </Navbar.Collapse>
            </Navbar>
        )
    }
}