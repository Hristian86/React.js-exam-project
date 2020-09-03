import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import './style.css';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import MainHeader from './MainHeader';
import WeatherApi from '../Weather/WeatherApi';
import LeftSideComponent from './LeftSideComponent';
import CenterComponent from './CenterComponent';
import RightComponent from './RightComponent';
import CorouselImage from './CorouselImage';
import Search from '../SearchBar/Search';
import SecondRowComp from './SecondRowComp';
import ThirdRow from './ThirdRow';
import LocalizationFunc from '../../Localization/LocalizationFunc';
import style from './style.module.css';

export default class HomeCom extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    async componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.data == undefined) {
                this.getItems();
            }
            //console.log("test");
        }, 600);

        let weather = new WeatherApi();
        const resultWeather = await weather.getWeather();
        //console.log(resultWeather);
        if (resultWeather) {
            this.setState({
                weather: resultWeather
            })
            //console.log(resultWeather.weather[0].id);
            //console.log(resultWeather.weather[0].main);
            //console.log(resultWeather.weather[0].description);
            //console.log(resultWeather.weather[0].icon);

        }
    }

    componentWillUnmount() {
        this.getItems();
    }

    getItems = async () => {
        let query = new GetQuery();
        const posts = await query.getPosts();

        if (posts) {
            this.setState({ data: posts });
        }
    }

    render() {

        let temp = 0;
        if (this.state.weather) {
            temp = Number(this.state.weather.main.temp);
            temp = temp - 273.15;
            temp = Math.floor(temp) + " C";
        }

        return (

            <div className="container-fluid asd">

                <div className="mobile-container">
                    <Search />
                </div>

                <div>

                    <div className="header-image-poster d-flex justify-content-end">

                        <h3 className="text-white text-mage-poster">{LocalizationFunc().forSale}</h3>

                    </div>

                    <div className="mt-5 text-center">
                        <h3 className="text-info">
                            {LocalizationFunc().homePageProductDescription}
                        </h3>
                    </div>

                </div>



                {/* first row  */}
                <div className="row bg-white first-row">
                    {/*left side*/}

                    <div className="col-lg-2 d-flex justify-content-center text-center ">

                        {this.state.weather ? <LeftSideComponent props={this.state} temp={temp} /> : null}

                    </div>

                    {/*center*/}
                    <div className="col-lg-8 wrapper-home d-flex justify-content-center">

                        <MainHeader />
                        {this.state.data ? <Cards props={this.state.data} /> : <em>Loading...</em>}


                    </div>


                    {/*right side*/}
                    <div className="col-lg-2 d-flex justify-content-center text-center">

                        <RightComponent />

                    </div>
                </div>

                {/* second row */}

                <SecondRowComp />



                {/*third row*/}
                <ThirdRow />
            </div>

        )
    }
}