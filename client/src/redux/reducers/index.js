// There is only one reducer, therefore I am naming it just index.js
import {GET_FORECAST} from '../constants/actionType'
export default (data=[], action)=>{
    switch(action.type){
        case GET_FORECAST:
            return action.payload
        default:
            return data;
    }
}
