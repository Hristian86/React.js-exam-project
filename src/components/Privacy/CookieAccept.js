import React from 'react';
import CookieConsent from 'react-cookie-consent';
import style from './style.module.css';

const CookieAccept = () => {

    return <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}

        onAccept={({ acceptedByScrolling }) => {
            if (acceptedByScrolling) {
                // triggered if user scrolls past threshold
                //alert("Accept was triggered by user scrolling");
            } else {
                //alert("Accept was triggered by clicking the Accept button");
            }
        }}
    >
        This website uses cookies to enhance the user experience.{" "}
        <a href="/Privacy/PrivacyPolicy" className={style.privacyLink}>Privacy policy</a>
    </CookieConsent>

}

export default CookieAccept;