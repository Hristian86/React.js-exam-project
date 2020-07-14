import React,{Component} from 'react';
<<<<<<< HEAD
import Search from '../SearchBar/Search';
=======
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f

export default class DetailsPage extends Component {
    constructor(props){
        super(props);

    }

    render() {
<<<<<<< HEAD
        console.log(this.props.history.location.state.data);
        return(

            <div>

                <div classNaem="container">
                    <Search />
                </div>

=======
        console.log(this.props.history.location.state.id)
        return(

            <div>
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
            asdasdasda

            </div>

        )
    }
}