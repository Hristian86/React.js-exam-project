import React,{Component} from 'react';
import './style.css';
import { Redirect } from 'react-router/cjs/react-router.min';
import Nav from 'react-bootstrap/esm/Nav';

export default class DetailsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            current: 0
        }
    }

    // componentDidMount() {
    //     this.setInrervals = setTimeout(() => {
    //         if (this.state.isLoaded) {
    //             this.setState({isLoaded: true});
    //         }
    //     }, 100);
    // }

    previos = () => {
        if (this.state.current <= 0) {
            
        } else {
            let prev = this.state.current - 1;
            this.setState({
                current: prev
            });
        }
    }

    next = () => {
        if (this.state.current >= this.state.data.length - 1) {
        } else {
            let prev = this.state.current + 1;
            this.setState({
                current: prev
            });
        }
    }

    scrollWin = () => {
        window.scrollTo(0, 0);
    }

    engine = () => {
        let data = [];
        data = this.props.history.location.state.data;
        let pictures = [];
        pictures = this.props.history.location.state.pictures;

        let pics = null;
        try {
            
            if (this.state.data == undefined) {
                let pagesData = [];
                pagesData.push(data.image);
                if (pictures !==undefined && pictures.length > 0) {
                    let dats = pictures.map(pic => pagesData.push(pic.image));
                }
                // console.log(pagesData);
                this.setState({
                    data: pagesData
                });
                // console.log("This is pages data " + pagesData);
            }
            // const id = this.props.history.location.state.id;
            // console.log(pictures);
        
            if (pics == null) {
                pics = pictures.map((pic, index) => <img key={index} className="more-pictures" src={pic.image} />);
            }

        } catch (error) {
            console.log(error);
        }
        
        return { data, pics};
    }

    render() {
        
        const { data, pics} = this.engine();

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
                    <div className="col-lg-8 container-up-left bg-white">



                       {this.state.data ? <img src={this.state.data[this.state.current]} className="image-poster" /> : null } 

                        <ul className="pagination d-flex justify-content-center">
                            <li className="page-item mr-1 previos-pointer">
                            <a className="page-link " onClick={this.previos} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                            </li>
                            
                                    <li className="page-item previos-pointer">
                                <a className="page-link" onClick={this.next} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </li>
                        </ul>

                    </div>

                    <div className="col-lg-3 container-up-right">

                        <div className="row">

                            <div className="col-lg-5 bg-white up-right-left text-center">
                                <p className="mt-4">User:</p>
                                <p><img src={data.photoURL} className="user-image" /></p>
                                <p>Phone number</p>
                                <p>{data.phone}</p>
                                </div>

                                <div className="col-lg-7 up-right-left bg-white text-center">
                                <p className="mt-4">{data.name}</p>
                                <p >{data.address}</p>
                                <br />
                                <p className="mt-4">Message goes here</p>
                                <p>
                                <button className="btn btn-success message-button" >Message</button>
                                </p>
                            </div>

                            <div className="col-lg-12 bg-white up-right-right">
                               {/* <p className="mt-4"> So hard to do this<br /> never again </p> */}
                               <p className="mt-3">Populated place:<br /><a className="mt-1">{data.city}</a></p>
                               <div className="text-center"><p>Google maps here.</p></div>
                            </div>

                        </div>
                        
                    </div>
                    

                </div>

                <div className="row mt-4">
                    <div className="col-lg-8 container-down-left bg-white">
                        <div className="image-poster">
                            <h2><p>{data.subject}</p></h2>
                            <h1><p>{data.price} $</p></h1>
                            <br />
                            <br />
                            <br />
                            <p>Description</p>
                            <p>{data.content}</p>

                        </div>

                    </div>

                    <div className="col-lg-3 container-up-right">

                       {/* second half goes here from className row*/}
                       <div className="more-pictures">
                       
                        {pics ? pics.map(pic => pic) : null}

                       </div>
                        
                    </div>
                    

                </div>
{/* 
                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
                {this.props.history.location.state ? <div>{data.price}</div> : null} */}

            </div>

        )
    }
}