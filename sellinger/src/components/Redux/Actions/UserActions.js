import { SET_USER, LOADING_USER, LOADING_UI } from '../Types';
import url from '../../BaseUrl/BaseUrl';

export const loginUserRedux = async (userData) => async (dispatch) => {
    dispatch({
        type: LOADING_UI
    });
    
    try {

        const result = await fetch(url("login"), {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(userData)
        }).then(res => res.json());
        if (await result) {
            //dispatch({
            //    type: SET_USER,
            //    payload: result
            //});
            return result;
        }

    } catch (e) {
        console.log(e);
    }
}