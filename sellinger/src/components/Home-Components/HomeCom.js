import React,{Component} from 'react';
import Search from '../SearchBar/Search';
import Cards from '../Cards/Cards';
import './style.css';

export default class HomeCom extends Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (

            <div className="container-fluid">
                        
                <div className="row">
                    <div className="col-2 d-flex justify-content-center text-center ">
                        <div className="left-box">
                            {/* <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p> */}
                        </div>
                    </div>
                    <div className="col-8 wrapper-home">
                        <Search />
                        <Cards />
                    </div>
                    <div className="col-2 d-flex justify-content-end ">
                        <div className="right-box">
                            <p>asdasd</p>
                            <p>asdddd</p>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-2 d-flex justify-content-center text-center ">
                        <div>
                            {/* <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p> */}
                        </div>
                    </div>
                    <div className="col-8">
                    
                        <Cards />
                    </div>
                    <div className="col-2 d-flex justify-content-end ">
                        <div >

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}