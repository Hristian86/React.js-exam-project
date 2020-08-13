import React, { Component } from 'react';
import './style.css';
import { Redirect } from 'react-router';
import ProductLeyout from '../Products/ProductLayout';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    searchItems = async (e) => {
        this.setState({
            loading: true
        })

        e.preventDefault();
        const search = e.target.search.value;
        const city = e.target.city.value;
        const option = e.target.option.value;

        const searchQuery = new GetQuery();
        let result = await searchQuery.getPosts();
        if (result) {
            let searchRes = [];


            if (city.length > 0) {
                result = result.filter((citySeach, index) => {
                    let currentCity = citySeach.city.toLowerCase();
                    const cityToLower = city.toLowerCase();
                    if (currentCity == cityToLower) {
                        return citySeach;
                    }
                });
            }

            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                let containsEl = element.subject.toLowerCase().includes(search.toLowerCase());
                if (containsEl) {
                    //console.log(element);
                    searchRes.push(element);
                }
            }

            this.setState({
                search: searchRes,
                redirect: true
            });
        }
    }

    render() {

        if (this.state.redirect && this.state.search) {

            return <Redirect push to={{
                pathname: `/Products/ProductList`,
                state: {
                    state: this.state.search
                }
            }} />

        } else {

            return (

                <div className="container content-style">

                    <section className="search-sec ">
                        <div className="container ">
                            <form onSubmit={this.searchItems} >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">

                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0 ">
                                                <input type="text" className="form-control search-slt " placeholder="Search" name="search" />
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0 ">
                                                <input type="text" className="form-control search-slt " placeholder="city" name="city" />
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <select className="form-control search-slt" id="exampleFormControlSelect1" name="option">
                                                    <option>For sale</option>
                                                    <option>For rent</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0 text-center">
                                                {this.state.loading ? <em className="loading-search btn btn-info wrn-btn">Loading...</em> : <button type="submit" className="btn btn-danger wrn-btn">Search</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            )
        }
    }
}