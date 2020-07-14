import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';
import login from './Auth/LogIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// import fireDB from './FirebaseDB/fireDB';
import dataS from './Cards/dataS';
import Tests from './Tests';
import './HearthStoneCards/Hearth.css'
import propsy from './SendingProps';
import Search from './SearchBar/Search';
import HomeCom from './Home-Components/HomeCom';
import GetQuery from './FirebaseDB/Query-Service/GetQuery';

export const UserContext = createContext({ user: null });

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            loading: false,
            dataAis: []
        }
        this.data = [];

        this.authListener = this.authListener.bind(this);
        this.retriveData = this.retriveData.bind(this);
    }

    async componentDidMount() {
        await this.authListener();
        await this.retriveData();
    }

    async authListener() {
        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: true,
                    loading: true,
                    dataAis: [],
                    chekses: false
                });
            } else {
                this.setState = ({
                    user: null,
                    loading: true,
                    dataAis: [],
                    chekses: true
                })
            }
        });

        return users;
    }

    async retriveData() {
        try {

            // let fireQuery = new fireDB();
            // let data = await fireQuery.readFromDb();
            let query = new GetQuery();
            const data = await query.getPosts();
            if (data) {   
                // this.data = data;
                this.setState({ dataAis: await data });
            }

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                {this.state.user ? <HomeCom /> : null} 
=======
                {propsy(this.state.user)}        
                {this.state.user ? <Tests name={this.state.user.displayName} /> : <Tests name={""} />}

                {this.state.user ? (<Cards />) : <div className="text-center load">Not logged</div>}

                <button onClick={fireQuery.createDataDb} className="btn btn-primary text-center">Seed</button>        

                {this.state.user ? <div className="d-flex justify-content-between">

                    <button onClick={fireQuery.createDataDb} className="btn btn-primary text-center">Seed</button>

                    <button onClick={this.retriveData} className="btn btn-primary text-center">Read</button>

                </div> : null}

                {this.state.user ? <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getDataFromStore()}
                    </tbody>
                </table> : null}
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f

                <div className="spacer"></div>
            </div>
        )
    }
}