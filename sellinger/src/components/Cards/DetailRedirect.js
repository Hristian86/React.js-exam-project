import React, {Component} from 'react';
import { useHistory } from 'react-router/cjs/react-router.min';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
import DetailsPage from '../Products/DetailsPage';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import DetailsQuery from '../FirebaseDB/Query-Service/DetailsQuery';

export default class DetailRedirect extends Component {
    constructor(props){
        super(props);

    }
    
    redirect = async () => {
        // console.log(this.props.id);

        let query = new DetailsQuery();
        let data = await query.getDetails(this.props.id);

        let getQuery = new GetQuery();
        const pictures = await getQuery.getImagesbyId(data.id);

        // console.log(data.id);
        
        if (pictures) {
            return <Redirect push to={{
                pathname: '/Products/DetailsPage',
                state: { 
                    id: this.props.id,
                    data: data,
                    pictures: pictures
                }
            }} />     
        }

        return <Redirect push to={{
            pathname: '/Products/DetailsPage',
            state: { 
                id: this.props.id,
                data: this.props
            }
            }} />

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