import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import Register from './components/Auth/Register';
import login from './components/Auth/LogIn';
import Logout from './components/Auth/Logout';
import Manage from './components/Auth/Manage';
import ProductList from './components/Products/ProductList';
import DetailsPage from './components/Products/DetailsPage';
import getCookie from './components/Cookioes/GetCookie';
import NotFound from './components/NotFoundPage/NotFount';
import Searching from './components/SearchBar/Searching';
import Error from './components/ErrorPage/Error';

export default class App extends Component {
    constructor(props) {
        super(props)


        this.state = {
            user: null,
            isLoading: false
        }
        this.mounted = false;
    }

    componentDidMount() {
        
        this.mounted = true;
        if (this.mounted) {
            this.cookieUser();
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    cookieUser = () => {
        let currentUser = getCookie("user");

        //To Do : add loged user to redux global state
        if (currentUser) {
            this.setState({
                user: currentUser,
                isLoged: true
            });
        } else {
            this.setState({
                user: null,
                isLoged: false
            });
        }
    }

    render() {

        return (
            <div className="App">
                <div className="App-header wrapper-layout">
                    <Layout>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home}>
                                </Route>

                                <Route exact path="/About" component={About}>
                                </Route>

                                <Route exact path="/Products/ProductList/:id?" component={ProductList} ></Route>

                                <Route exact path="/SearchBar/Searching" component={Searching} ></Route>

                                <Route exact path="/Contact" component={Contact}>
                                </Route>

                                <Route exact path="/Products/DetailsPage/:id?" component={DetailsPage}>
                                </Route>

                                <Route exact path="/components/ErrorPage/Error" component={Error}>
                                </Route>

                                <Route exact path="/Auth/Register" component={Register}>
                                </Route>
                                <Route exact path="/Auth/LogIn" component={login}>
                                </Route>
                                <Route exact path="/Auth/Logout" component={Logout}>
                                </Route>

                                <Route exact path="/Auth/Manage" component={Manage}>
                                </Route>

                                <Route exact path="/components/SearchBar/Searching/:id?" component={Searching}>
                                </Route>

                                <Route path="*" component={NotFound} />

                            </Switch>
                        </Router>

                    </Layout>

                </div>
            </div>
        );
    }
}

//const PrivateRoute = ({ component: Component, ...rest }) => {
//    var resut = authListener();
//    var rs = { ...rest };
//    var chek = false;
//    resut.then(res => res);
//    setTimeout(() => {
//        console.log(useraaa);
//        if (useraaa.email !== undefined) {
//            return <Route {...rest} render={(props) => (
//                chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
//            )
//            } />
//        }
//    }, 1000);

//    if (rs !== undefined) {
//        chek = true;
//    }

//    return <Route {...rest} render={(props) => (
//        chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
//    )
//    } />
//}

//async function authListener() {
//    let chek = false;
//    const users = await fire.auth().onAuthStateChanged(user => {
//        if (user) {
//            chek = true;
//        } else {
//        }
//    });
//    return chek;
//}