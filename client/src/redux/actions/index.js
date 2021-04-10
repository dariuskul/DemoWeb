import * as api from '../../api/index'
import {GET_FORECAST, ADD_URL, REMOVE_URL, REMOVE_ALL} from '../constants/actionType'
export const fetchData = (placeCode, forecast) => async (dispatch) =>{

    try {
        const {data: {forecastTimestamps}} = await api.fetchData(placeCode,forecast)
        const firstTimeStamp = forecastTimestamps[60].conditionCode; // picked a random item
        console.log(firstTimeStamp)
        dispatch({type: GET_FORECAST, payload: firstTimeStamp})
        
    } catch (error) {
        alert("Relaod the page and wait.")
    }
}

export const addUrl = (url) => (dispatch) =>{
    dispatch({type: ADD_URL, payload: url});
}

export const removeUrl = () => (dispatch)=>{
    dispatch({type: REMOVE_URL});
}

export const removeAll = () => (dispatch)=>{
    dispatch({type: REMOVE_ALL});
}