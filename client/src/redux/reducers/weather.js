/* eslint-disable import/no-anonymous-default-export */
// There is only one reducer, therefore I am naming it just index.js
import {GET_FORECAST} from '../constants/actionType'

const imageTypes = {
    sunglasses: ['clear', 'isolated-clouds', 'scattered-clouds', 'na'],
    umbrella: ['overcast', 'light-rain', 'moderate-rain', 'heavy-rain', 'fog'],
    snowflake: ['sleet', 'light-snow', 'moderate-snow', 'heavy-snow']
}



 const getWord = (props) =>{
    for (let row in imageTypes) {

        for(let i = 0; i < imageTypes[row].length; i++){
            if(imageTypes[row][i]===props){
                return row;
            }
        }
     }
 }

export default(data=[], action)=>{
    switch(action.type){
        case GET_FORECAST:
            return getWord(action.payload)
        default:
            return data;
    }
}
