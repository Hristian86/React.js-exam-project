import { SET_USER, LOADING_USER, LOADING_UI } from '../Types';

const initialState = {
    authentication: false
}

export default (state = initialState, action) => {
    if (action.type === "SET_USER") {
        return {
            authentication: true,
            ...action.payload
        }
    }
}