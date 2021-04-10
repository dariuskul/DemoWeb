
import {ADD_URL,REMOVE_URL,REMOVE_ALL} from '../constants/actionType'
export default(urls=[], action)=>{
    switch(action.type){
        case ADD_URL:
            return [...urls, action.payload]
        case REMOVE_URL:
            return urls.filter((element, index) => index < urls.length - 1);
        case REMOVE_ALL:
            return [];
        default:
            return urls;
    }
}
