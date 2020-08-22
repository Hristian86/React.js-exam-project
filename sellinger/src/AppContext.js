import App from './App';
import React from 'react';
import { Context } from './Context';
import { useState } from 'react';
import GetQuery from './components/FirebaseDB/Query-Service/GetQuery';
import getCookie from './components/Cookies/GetCookie';
import setCookie from './components/Cookies/SetCookie';
import { UserContext } from './components/Home';
import { provider } from 'redux';
import Store from './components/Redux/Store';

const AppContext = () => {

    const [value, setValue] = useState([]);

    const setDefaultLang = () => {
        const lang = getCookie('language');
        if (lang === undefined) {
            setCookie('language', 'BG', 5);
        }
    }

    return <div>
        <UserContext.Provider>
            <provider store={Store}>
                <App />
            </provider>
        </UserContext.Provider>
    </div>

}

export default AppContext;


    //useEffect(() => {
    //    const fetch = async () => {
    //        const query = new GetQuery();
    //        const result = await query.getPosts();
    //        if (await result) {
    //            return result;
    //        }
    //    }
    //    let data = [];
    //    setTimeout(async () => {
    //        data = await fetch();
    //        if (data) {
    //            setValue(data);
    //        }
    //    }, 400)
    //    console.log(data);
    //}, [])
    //if (value[0] == undefined || value[0] == null) {
    //    //setValue(["user", "asd"]);
    //}
    ////console.log(value);