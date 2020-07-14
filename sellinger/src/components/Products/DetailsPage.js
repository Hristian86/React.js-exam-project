import React,{Component} from 'react';
<<<<<<< HEAD
import Search from '../SearchBar/Search';
=======
<<<<<<< HEAD
import Search from '../SearchBar/Search';
=======
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a

export default class DetailsPage extends Component {
    constructor(props){
        super(props);

    }

    render() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
        console.log(this.props.history.location.state.data);
        return(

            <div>

                <div classNaem="container">
                    <Search />
                </div>

<<<<<<< HEAD
=======
=======
        console.log(this.props.history.location.state.id)
        return(

            <div>
>>>>>>> 868b3e90d38c0db41408702ba47cb3f39818520f
>>>>>>> 074ebfa281304b683946ad49ceb3c9990f28e65a
                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
            asdasdasda

            </div>

        )
    }
}