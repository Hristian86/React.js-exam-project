import React from 'react';
import './footer.css';

const footer = () => {
    return <div className="footer bg-white">
        <div className="firstFooterLink">
            <div>
                The common perception of the website footer is that it�s not as important as the header or body of the content.<br /> This relates to the somewhat antiquated notion that the most important information must lie above the fold, or before you start scrolling.
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
                <h1 className="bg-white text-center mobile">About us</h1>
                <h2 className="bg-white text-center mobile">Our services are. </h2>
                <h2 className="bg-white text-center mobile">Buying and selling properties.</h2>
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