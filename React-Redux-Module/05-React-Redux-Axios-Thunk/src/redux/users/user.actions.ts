import axios from 'axios';

export const FETCH_USER_REQUEST : string = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS : string = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE : string = 'FETCH_USER_FAILURE';

export const fetchUsers = () => {
    return (dispatch:any) => {
        dispatch({type : FETCH_USER_REQUEST});
        let dataURL:string = `https://jsonplaceholder.typicode.com/users`;
        axios.get(dataURL).then((response) => {
            dispatch({
                type : FETCH_USER_SUCCESS,
                payload : {
                    users : response.data
                }});
        }).catch((error) => {
            dispatch({
                type : FETCH_USER_FAILURE,
                payload : {
                    error : error.message
                }});
        });
    };
};