import React,{Component} from 'react';
import Cards from '../Cards/Cards';
import './style.css';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import MainHeader from './MainHeader';

export default class HomeCom extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.data == undefined) {
                this.getItems();
            }
            //console.log("test");
        }, 600);
    }

    getItems = async () => {
        let query = new GetQuery();
        const posts = await query.getPosts();
        
        if (posts) {
            this.setState({ data: posts });
        }
    }

    render() {
        
        return (

            <div className="container-fluid">
                        {/* first row  */}
                <div className="row">
                    <div className="col-lg-2 d-flex justify-content-center text-center ">
                        <div className="left-box">
                            <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p>
                        </div>
                    </div>

                    <div className="col-lg-8 wrapper-home">
                        <MainHeader />
                       {this.state.data ? <Cards props={this.state.data} /> : <em>Loading...</em>} 
                    </div>

                    <div className="col-lg-2 d-flex justify-content-center text-center">
                        <div className="right-box">
                            <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p>
                        </div>
                    </div>
                </div>

                {/* second row */}
                <div className="row">
                    <div className="col-lg-2 d-flex justify-content-center text-center ">
                        <div>
                            {/* <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p> */}
                        </div>
                    </div>

                    <div className="col-lg-8">
                        {/* <Cards /> */}
                    </div>

                    <div className="col-lg-2 d-flex justify-content-end ">
                        <div >
                                
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}