import { combineReducers } from "redux";

import {
    fetchMotionReducer,
    fetchDigitalReducer,
    fetchPrintReducer,
    fetchUxReducer
} from './projectReducers'

export default combineReducers ({

    fetchMotionReducer,
    fetchDigitalReducer,
    fetchPrintReducer,
    fetchUxReducer

})