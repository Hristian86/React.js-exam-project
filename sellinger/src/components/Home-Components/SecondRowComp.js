import React from 'react';
import './style.css';

const SecondRowComp = () => {

    const styleFirst = {
        background: "url(https://rashidov.com/im_firmi/29/imc/object_details_3_73_1_middle.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    const styleSecond = {
        background: "url(https://wallpaperaccess.com/full/2587632.jpg)",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center"
    }

    return <div className="row bg-white second-row">

        <div style={styleFirst} className="col-lg-5 bg-light">

        </div>

        <div className="col-lg-2 d-flex justify-content-center" >

            <h3>
                Example
                        </h3>

        </div>

        <div className="col-lg-5 bg-light" style={styleSecond}>

        </div>

    </div>
}

export default SecondRowComp;