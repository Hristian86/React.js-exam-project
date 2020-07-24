import React,{Component} from 'react';
import './style.css';
import CreateQuery from '../FirebaseDB/Query-Service/CreateQuery';

export default class Successfully extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const image1 = e.target.image1.value;
        const image2 = e.target.image2.value;
        const image3 = e.target.image3.value;
        console.log(image1);
        console.log(image2);
        console.log(image3);
        
        const id = this.props.uid;

        let createQuery = new CreateQuery();
        createQuery.AddPictures(image1,image2,image3,id)

    }

    render() {
        
        // console.log(this.props.uid);
        return (
        <form onSubmit={this.handleSubmit} className="onSuccess text-center">
            <input type="text" name="image1" />
            <input type="text" name="image2" />
            <input type="text" name="image3" />
            <button type="submit" >Submit</button>
        </form>
        )
    }
}
