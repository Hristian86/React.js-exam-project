import React from 'react';
import './footer.css';
import LocalizationFunc from '../Localization/LocalizationFunc';
import { CardLink } from 'reactstrap';

const footer = () => {
    return <div className="footer bg-white">
        <div className="firstFooterLink">
            <div>
                {LocalizationFunc().footerDescription1}<br />{LocalizationFunc().footerDescription2}
            </div>
        </div>
    </div>
}

const foot = () => {
    return <div className="">
        <div className="browser">
            <div className="chrome text-white">
                <a href="#" className=""></a>
                <a href="#" className="amber"></a>
                <a href="#" className="green"></a>
                <div className="url"></div>
            </div>
            <div className="ml-3 mt-3">
                <h1 className="bg-white text-center mobile">{LocalizationFunc().about}</h1>
                <h2 className="bg-white text-center mobile">{LocalizationFunc().ourServices}</h2>
                <h2 className="bg-white text-center mobile">{LocalizationFunc().ourServicesDescription}</h2>
            </div>

            <div className="d-flex justify-content-end">
                <h5 className="bg-white right-links">
                    Facebook link
            </h5>
            </div>

            <footer>
                <div className="social-media-links">

                </div>
            </footer>
        </div>
        <div>
            {footer()}
        </div>
    </div>
}


export default foot