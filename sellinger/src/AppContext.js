import React, { useEffect } from 'react';
import App from './App';
import { Context } from './Context';
import { useState } from 'react';
import GetQuery from './components/FirebaseDB/Query-Service/GetQuery';

const AppContext = () => {

    //const [value, setValue] = useState([]);

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

    return <div>

        <App />

    </div>

}

export default AppContext;