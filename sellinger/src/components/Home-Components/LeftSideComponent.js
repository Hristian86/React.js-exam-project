import React from 'react';  
import './style.css';
import LocalizationFunc from '../../Localization/LocalizationFunc';

const LeftSideComponent = (props) => {

    const weather = props.props.weather;
    
    return <div className="left-box">
        <div>{LocalizationFunc().weather}</div>
        {/*{weather ? weather.weather[0].main : null}
        <br />*/}
        {/*{weather ? weather.weather[0].description : null}
        <br />*/}
        {weather ? props.temp : null}
    </div>
}

export default LeftSideComponent;