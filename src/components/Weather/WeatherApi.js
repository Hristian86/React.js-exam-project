import React, { Component } from 'react';

export default class WeatherApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: "627fdc2109e88452acf73be340892ac2"
        }
    }

    getWeather = async () => {

        const link = `https://api.openweathermap.org/data/2.5/weather?q=Russe,Bulgaria&appid=${this.state.apiKey}`;

        try {

            const result = await fetch(link)
                .then(res => res.json())
                .catch(err => console.log(err));
            if (await result) {
                return result;
            }

        } catch (e) {
            console.log(e);
        }
    }
}