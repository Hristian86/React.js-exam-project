import React,{Component} from 'react';

export default class DetailsPage extends Component {
    constructor(props){
        super(props);

    }

    render() {
        console.log(this.props.history.location.state.id)
        return(

            <div>
                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
            asdasdasda

            </div>

        )
    }
}