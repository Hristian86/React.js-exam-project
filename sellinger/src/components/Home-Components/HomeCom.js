import React,{Component} from 'react';
import Cards from '../Cards/Cards';
import './style.css';
import GetQuery from '../FirebaseDB/Query-Service/GetQuery';
import MainHeader from './MainHeader';
import WeatherApi from '../Weather/WeatherApi';

export default class HomeCom extends Component {
    constructor(props){
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
        console.log(resultWeather);
        if (resultWeather) {
            this.setState({
                weather: resultWeather
            })
            console.log(resultWeather.weather[0].id);
            console.log(resultWeather.weather[0].main);
            console.log(resultWeather.weather[0].description);
            console.log(resultWeather.weather[0].icon);
            
        }
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

            <div className="container-fluid">
                        {/* first row  */}
                <div className="row">
                    <div className="col-lg-2 d-flex justify-content-center text-center ">
                        <div className="left-box">
                            <div>The weather in Russe</div>
                            {this.state.weather ? this.state.weather.weather[0].main : null}
                            <br />
                            {this.state.weather ? this.state.weather.weather[0].description : null}
                            <br />
                            {this.state.weather ? temp : null}
                            
                            
                            {/* <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p> */}
                        </div>
                    </div>

                    <div className="col-lg-8 wrapper-home d-flex justify-content-center">
                        <MainHeader />
                       {this.state.data ? <Cards props={this.state.data} /> : <em>Loading...</em>} 
                    </div>

                    <div className="col-lg-2 d-flex justify-content-center text-center">
                        <div className="right-box">
                            {/* <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p> */}
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