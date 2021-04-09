import {combineReducers} from 'redux' 

import url from './urls'

import weather from './weather'

export default combineReducers({
    url,
    weather
})