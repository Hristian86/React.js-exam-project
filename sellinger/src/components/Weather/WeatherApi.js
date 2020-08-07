import React,{Component} from 'react';

export default class WeatherApi extends Component {
    constructor(props){
        super(props);

        this.state = {
            apiKey: "627fdc2109e88452acf73be340892ac2"
        }
    }

    getWeather = async (city) => {
        const link = `https://api.openweathermap.org/data/2.5/weather?q=${city},Bulgaria&appid=${this.state.apiKey}`;
        let ress = null
        const result = await fetch(link)
        .then(res => {
            if (res) {
                ress = res.json();
            }
        })
        .then(res => res)
        .catch(err => console.log(err));
        let disp = await ress;
        return disp;
    }
}