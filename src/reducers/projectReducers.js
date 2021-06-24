import{

PRINT_FETCH_REQUEST,
PRINT_FETCH_SUCCESS,
PRINT_FETCH_FAIL,
DIGITAL_FETCH_REQUEST,
DIGITAL_FETCH_SUCCESS,
DIGITAL_FETCH_FAIL,
MOTION_FETCH_REQUEST,
MOTION_FETCH_SUCCESS,
MOTION_FETCH_FAIL,
UX_FETCH_REQUEST,
UX_FETCH_SUCCESS,
UX_FETCH_FAIL,

} from '../constants/projectConstants'

const fetchDigitalReducer = (state ={}, action) => {
    switch(action.type) {
        case DIGITAL_FETCH_REQUEST:
            return {
                loading:true
            };
         
            case DIGITAL_FETCH_SUCCESS:
            return {
                loading:false,
                digitalproject:action.payload
            };

        case DIGITAL_FETCH_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

const fetchPrintReducer = (state ={}, action) => {
    switch(action.type) {
        case PRINT_FETCH_REQUEST:
            return {
                loading:true
            };
         
            case PRINT_FETCH_SUCCESS:
            return {
                loading:false,
                project:action.payload
            };

        case PRINT_FETCH_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

const fetchMotionReducer = (state ={}, action) => {
    switch(action.type) {
        case MOTION_FETCH_REQUEST:
            return {
                loading:true
            };
         
            case MOTION_FETCH_SUCCESS:
            return {
                loading:false,
                project:action.payload
            };

        case MOTION_FETCH_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

const fetchUxReducer = (state ={}, action) => {
    switch(action.type) {
        case UX_FETCH_REQUEST:
            return {
                loading:true
            };
         
            case UX_FETCH_SUCCESS:
            return {
                loading:false,
                project:action.payload
            };

        case UX_FETCH_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export  {
    fetchMotionReducer,
    fetchPrintReducer,
    fetchDigitalReducer,
    fetchUxReducer

}