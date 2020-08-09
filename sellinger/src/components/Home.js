import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import Cards from './Cards/Cards';
import login from './Auth/LogIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import dataS from './Cards/dataS';
import Tests from './Tests';
import './HearthStoneCards/Hearth.css'
import propsy from './SendingProps';
import Search from './SearchBar/Search';
import HomeCom from './Home-Components/HomeCom';
import GetQuery from './FirebaseDB/Query-Service/GetQuery';
import getCookie from './Cookioes/GetCookie';

export const UserContext = createContext({ user: null });

export default class Home extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        return (
            <div>
                <HomeCom />
                <div className="spacer"></div>
            </div>
        )
    }
}