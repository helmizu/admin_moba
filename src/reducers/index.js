import {combineReducers} from 'redux'
import globalReducer from './globalReducer'
import dataReducer from './dataReducer'

export default combineReducers({
    global : globalReducer,
    data : dataReducer
})