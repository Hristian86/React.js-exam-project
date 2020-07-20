import React,{Component} from 'react';
import './style.css';
import { Redirect } from 'react-router/cjs/react-router.min';
import Nav from 'react-bootstrap/esm/Nav';

export default class DetailsPage extends Component {
    constructor(props){
        super(props);

        // this.state = {}
    }

    // componentDidMount() {
    //     this.setInrervals = setTimeout(() => {
    //         if (this.state.isLoaded) {
    //             this.setState({isLoaded: true});
    //         }
    //     }, 100);
    // }

    scrollWin = () => {
        window.scrollTo(0, 0);
      }

    render() {
        const data = this.props.history.location.state.data;
        // console.log(this.props.history.location.state.data);
        // window.location.reload(false);
        // if (this.state.isLoaded) {
        //     clearInterval(this.setInrervals);
        // }
        this.scrollWin();
        return(

            <div className="container wrapper-details">

                <Nav.Link href="/Products/ProductList" className="btn btn-info pl-4 pr-4 mb-3 back-button" >Back</Nav.Link>

                <div className="row">
                    <div className="col-8 container-up-left bg-white">
                        <img src={data.image} className="image-poster" />
                    </div>

                    <div className="col-3 container-up-right">

                        <div className="row">

                            <div className="col-5 bg-white up-right-left text-center">
                                <p className="mt-4">User:</p>
                                <p><img src={data.photoURL} className="user-image" /></p>
                                <p>Phone number</p>
                                <p>{data.phone}</p>
                                </div>

                                <div className="col-7 up-right-left bg-white text-center">
                                <p className="mt-4">{data.name}</p>
                                <p >{data.address}</p>
                                <br />
                                <p className="mt-4">Message goes here</p>
                                <p>
                                <button className="btn btn-success message-button" >Message</button>
                                </p>
                            </div>

                            <div className="col-12 bg-white up-right-right">
                               {/* <p className="mt-4"> So hard to do this<br /> never again </p> */}
                               <p className="mt-3">Populated place:<br /><text className="mt-1">{data.city}</text></p>
                               <div className="text-center"><p>Google maps here.</p></div>
                            </div>

                        </div>
                        
                    </div>
                    

                </div>

                <div className="row mt-4">
                    <div className="col-8 container-up-left bg-white">
                        <div className="image-poster">
                            <p><h2>{data.subject}</h2></p>
                            <p><h1>{data.price} $</h1></p>
                            <br />
                            <br />
                            <br />
                            <p>Description</p>
                            <p>{data.content}</p>

                        </div>

                    </div>

                    <div className="col-3 container-up-right">

                       {/* second half goes here from className row*/}
                       
                        
                    </div>
                    

                </div>
{/* 
                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
                {this.props.history.location.state ? <div>{data.price}</div> : null} */}

            </div>

        )
    }
}