import mainReducer from './reducer'
import reducerPagination from './reducerPagination'

import {combineReducers} from 'redux'

const allReducers= combineReducers({
    mainReducer, reducerPagination
})

export default allReducers;