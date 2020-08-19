import React, { Component } from 'react';
import './style.css';
import { Redirect } from 'react-router/cjs/react-router.min';
import { Nav } from 'react-bootstrap';
import DetailsQuery from '../FirebaseDB/Query-Service/DetailsQuery';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import DetailsImage from './Details-Components-Holder/DetailImage';

let scroll = 0;

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }
    }

    async componentDidMount() {
        if (!this.state.data) {
            await this.detailsById();
        }
    }

    detailsById = async () => {
        try {
            const paramId = this.props.match.params.id;

            let query = new DetailsQuery();
            let data = await query.getDetails(paramId);
            if (data.message == "not found") {
                this.setState({
                    notFound: true
                });
            } else {

                let getQuery = new GetQuery();
                const pictures = await getQuery.getImagesbyId(data.id);

                if (await data) {
                    this.setState({
                        contentLoad: data
                    })
                }

                if (this.state.data == undefined) {
                    let pagesData = [];
                    pagesData.push(data.image);
                    if (pictures !== undefined) {
                        if (pictures.length > 0) {
                            let dats = pictures.map(pic => pagesData.push(pic.image));
                        }
                    }
                    // console.log(pagesData);
                    this.setState({
                        data: pagesData
                    });
                    // console.log("This is pages data " + pagesData);
                }

                let pics = null;

                if (pics == null) {
                    pics = pictures.map((pic, index) => <img key={index} className="more-pictures" src={pic.image} />);
                }

                if (pictures) {
                    this.setState({
                        pictures: pics
                    });
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

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

    render() {

        if (scroll == 0) {
            this.scrollWin();
            scroll = scroll + 1;
        }
        let infoImages = null;
        if (this.state.pictures) {
            infoImages = this.state.pictures.map((pic, index) => {
                return index < 3 ? pic : null
            });
        }
        return (
            <div>{this.state.notFound ? <h3 className="text-center mt-5">Not found</h3> :
                <div className="main-container">{!this.state.data ? <div className="detail-loading"> <em >Loading...</em></div> :
                    <div className="container wrapper-details">

                        <Nav.Link href="/Products/ProductList" className="btn btn-info pl-4 pr-4 mb-3 back-button" >Back</Nav.Link>

                        <div className="row">

                            <DetailsImage previos={this.previos} next={this.next} state={this.state} />



                            <div className="col-lg-3 container-up-right">

                                <div className="row">

                                    <div className="col-lg-5 bg-white up-right-left text-center">
                                        <p className="mt-4">User:</p>
                                        <p><img src={this.state.contentLoad.photoURL} className="user-image" /></p>
                                        <p>Phone number</p>
                                        <p>{this.state.contentLoad.phone}</p>
                                    </div>

                                    <div className="col-lg-7 up-right-left bg-white text-center">
                                        <p className="mt-4">{this.state.contentLoad.name}</p>
                                        <p >{this.state.contentLoad.address}</p>
                                        <br />
                                        <p className="mt-4">Message goes here</p>
                                        <p>
                                            <button className="btn btn-success message-button" >Message</button>
                                        </p>
                                    </div>

                                    <div className="col-lg-12 bg-white up-right-right">
                                        {/* <p className="mt-4"> So hard to do this<br /> never again </p> */}
                                        <p className="mt-3">Populated place:<br /><a className="mt-1">{this.state.contentLoad.city}</a></p>
                                        <hr className="solid" />

                                        <div className="text-center"><p>Google maps here.</p></div>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-8 container-down-left bg-white">
                                <div className="image-poster">
                                    <h2><p>{this.state.contentLoad.subject}</p></h2>

                                    <hr className="solid" />

                                    <h1><p>{this.state.contentLoad.price} $</p></h1>
                                    <br />
                                    <br />
                                    <br />
                                    <p>Description</p>
                                    <p>{this.state.contentLoad.content}</p>

                                </div>

                            </div>

                            <div className="col-lg-3 container-up-right">

                                {/* second half goes here from className row*/}
                                <div className="more-pictures">

                                    {this.state.pictures ? infoImages : null}

                                </div>

                            </div>


                        </div>
                        {/* 
                {this.props.history.location.state.id ? <div>{this.props.history.location.state.id}</div> : null}
                {this.props.history.location.state ? <div>{data.price}</div> : null} */}

                    </div>
                }</div>
            }</div>
        )
    }

}