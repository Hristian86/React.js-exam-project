import React, { Component } from 'react';
import './style.css';
import { Redirect } from 'react-router';
import ProductLeyout from '../Products/ProductLayout';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import LocalizationFunc from '../../Localization/LocalizationFunc';

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

        try {

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

        } catch (e) {
            console.log(e);
        }
    }

    render() {

        if (this.state.redirect && this.state.search) {
            try {

                return <Redirect push to={{
                    pathname: `/Products/ProductList`,
                    state: {
                        state: this.state.search
                    }
                }} />

            } catch (e) {
                console.log(e);
            }

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
                                                <input type="text" className="form-control search-slt " maxLength="50" placeholder={LocalizationFunc().search} name="search" />
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0 ">
                                                <input type="text" className="form-control search-slt " placeholder={LocalizationFunc().city} maxLength="50" name="city" />
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <select className="form-control search-slt" id="exampleFormControlSelect1" name="option">
                                                    <option>{LocalizationFunc().forSale}</option>
                                                    <option>{LocalizationFunc().forRent}</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0 text-center">
                                                {this.state.loading ? <em className="loading-search btn btn-info wrn-btn">Loading...</em> : <button type="submit" className="btn btn-danger wrn-btn">{LocalizationFunc().search}</button>}
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