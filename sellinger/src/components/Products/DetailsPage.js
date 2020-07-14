import React,{Component} from 'react';
import Search from '../SearchBar/Search';

export default class DetailsPage extends Component {
    constructor(props){
        super(props);

    }

    render() {
        console.log(this.props.history.location.state.data);
        return(

            <div>

                <div classNaem="container">
                    <Search />
                </div>

                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
            asdasdasda

            </div>

        )
    }
}