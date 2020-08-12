import React, { useContext, useState } from 'react';
import { Context } from '../Context';

const About = () => {

    const { value, setValue } = useContext(Context);
    //console.log(value);


    //const [notifications, setNotifications] = useState([]);
    //if (notifications[0] == null || notifications[0] == undefined) {
    //    setNotifications(["asdasd"]);
    //} else {
    //    console.log(notifications[0]);
    //}

    return <div className="text-center">
        <h1>Welcome to Our Company</h1>
        <h2>Web Site Main Ingredients:</h2>

        <p>Pages (HTML)</p>
        <p>Style Sheets (CSS)</p>
        <p>Computer Code (JavaScript)</p>
        <p>Live Data (Files and Databases)</p>
        
        <div className="spacer"></div>
    </div>

}

export default About;