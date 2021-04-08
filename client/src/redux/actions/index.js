import * as api from '../../api/index'
import {GET_FORECAST} from '../constants/actionType'

export const fetchData = (placeCode, forecast) => async (dispatch) =>{

    try {
        const {data: {forecastTimestamps}} = await api.fetchData(placeCode,forecast)
        const firstTimeStamp = forecastTimestamps[0].conditionCode;
        console.log(firstTimeStamp)
        dispatch({type: GET_FORECAST, payload: firstTimeStamp})
        
    } catch (error) {
        console.log(error.message);
    }
}