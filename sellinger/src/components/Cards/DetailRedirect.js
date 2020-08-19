import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route,
    Redirect, Switch
} from 'react-router-dom';
import DetailsPage from '../Products/DetailsPage';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import DetailsQuery from '../FirebaseDB/Query-Service/DetailsQuery';

export default class DetailRedirect extends Component {
    constructor(props) {
        super(props);

    }

    redirect = async () => {
        try {

            return <Redirect push to={{
                pathname: `/Products/DetailsPage/${this.props.id}`
            }} />

        } catch (e) {
            console.log(e);
        }
    }

    render() {

        return (

            <Router>
                <Switch>
                    <div>
                        <Redirect push to={{
                            pathname: '/Products/DetailsPag',
                            state: {
                                // id: this.state.detailId,
                                data: this.props.id
                                // pictures: this.state.pictures
                            }
                        }} />
                    </div>
                </Switch>
            </Router>
        )
    }
}