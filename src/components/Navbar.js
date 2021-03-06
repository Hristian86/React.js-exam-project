import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './About';
import Register from './Auth/Register';
import LogIn from './Auth/LogIn';
import Cards from './Cards/Cards';
import ProductList from './Products/ProductList';
import GetQuery from './FirebaseDB/Query-Service/GetQuery';
import ProductLeyout from './Products/ProductLayout';
import getCookie from './Cookies/GetCookie';
import LocalizationFunc from '../Localization/LocalizationFunc';
import setCookie from './Cookies/SetCookie';
import getUserByToken from './Auth/GetUserByToken';

export default class navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoged: false,
            user: null
        }

        //this.authListener = this.authListener.bind(this);
    }

    language = () => {
        //setting the language by user choise
        const lang = getCookie('language');
        if (lang === undefined) {
            setCookie('language', 'BG', 5);
            this.setState({
                currentlanguage: lang
            });
            window.location.reload(false);
        }
        if (lang != this.state.currentlanguage) {
            window.location.reload(false);
            this.setState({
                currentlanguage: lang
            });
        }
    }

    setLanguage = (e) => {
        //get data from the selectable field
        const lang = e.target.value;
        if (lang == "EN") {
            setCookie("language", "EN", 5);
            console.log(lang);
        } else if (lang == "BG") {
            setCookie("language", "BG", 5);
            console.log(lang);
        }
        this.language();
    }

    componentDidMount() {
        this.cookieUser();
    }

    componentWillUnmount() {
        this.cookieUser();
    }

    cookieUser = async () => {
        //check for current user if its logged
        const currentUser = getCookie("user");
        //check if the user has a username setted
        const userName = getCookie("user_name");
        //this is when the user opens up the website after time and if there is a cookie
        const cookieCheck = getCookie("checked");

        const token = getCookie("token");

        if (userName === null || userName === undefined || userName === "") {
            if (currentUser && cookieCheck === "") {
                const user = await getUserByToken();

                if (await user.displayName !== undefined) {
                    if (user.displayName.length > 2) {
                        setCookie("user_name", user.displayName, 5);
                    }
                }
                setCookie("checked", "checked", 5);
            }
        }

        const currUserName = getCookie("user_name");
        //To Do : add loged user to redux global state
        if (currentUser) {
            if (currUserName) {
                this.setState({
                    user: currUserName,
                    isLoged: true
                });
            } else {
                this.setState({
                    user: currentUser,
                    isLoged: true
                });
            }
        } else {
            this.setState({
                user: null,
                isLoged: false
            });
        }
    }

    prevDef(e) {

        e.preventDefault();
    }

    render() {
        let cheks = false;
        let usr = this.state.user;

        let displayName = null;
        let token = null;
        if (usr) {
            cheks = true;
            displayName = usr;
        } else {
            cheks = false;
        }

        return (<div className="">
            <Navbar bg="light" className="nav-bar-background" expand="lg">
                <Navbar.Brand href="/" onClick={() => this.prevDef}>
                    <img src="https://hristian86.github.io/WebTest/images/logo-real-estate.png" className="logo-image" alt="image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="/Products/ProductList/all" onClick={this.resetState} className="link-style">{LocalizationFunc().product}</Nav.Link>

                        <Nav.Link href="/About" className="link-style" onClick={() => this.prevDef}>{LocalizationFunc().about}</Nav.Link>

                        <Nav.Link href="/Contact" className="link-style" onClick={() => this.prevDef}>{LocalizationFunc().contact}</Nav.Link>

                    </Nav>

                    <form onChange={this.setLanguage} className="btn">
                        <select className="btn btn-outline-success" name="language">
                            <option>{LocalizationFunc().language}</option>
                            <option name="en">EN</option>
                            <option name="bg">BG</option>
                        </select>
                    </form>

                    <Form inline className="mr-3" onSubmit={this.searchHandle} >
                        <FormControl type="text" placeholder="    +359 98 978 4352" disabled name="searchItem" className="mr-sm-2" />
                        <Nav.Link href="/" variant="outline-success" className="contact-button btn btn-outline-success">{LocalizationFunc().search}</Nav.Link>
                    </Form>

                    {/* <SearchNav /> */}

                    {this.state.isLoged ? <Nav.Link href="/Auth/Manage" className="text-info" onClick={() => this.prevDef}>{displayName !== null ? displayName + "'s" : ""} {LocalizationFunc().managment}</Nav.Link> :
                        <Nav.Link href="/Auth/Register" className="text-info" onClick={() => this.prevDef}>{LocalizationFunc().register}</Nav.Link>}

                    {this.state.isLoged ? <Nav.Link href="/Auth/Logout" className="mr-3 text-info" onSubmit={() => this.prevDef}>{LocalizationFunc().logout}</Nav.Link> : <Nav.Link href="/Auth/LogIn" className="mr-3 text-info" onClick={() => this.prevDef}>{LocalizationFunc().login}</Nav.Link>}

                </Navbar.Collapse>
            </Navbar>
            <div>
                {this.state.search ? <ProductLeyout state={this.state.search} /> : null}
            </div>


        </div>
        )
    }
}