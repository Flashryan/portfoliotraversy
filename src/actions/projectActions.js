import sanityClient from '../client'

import  {
    DIGITAL_FETCH_REQUEST,
    DIGITAL_FETCH_SUCCESS,
    DIGITAL_FETCH_FAIL,

    PRINT_FETCH_FAIL,
    PRINT_FETCH_SUCCESS,
    PRINT_FETCH_REQUEST,

    MOTION_FETCH_FAIL,
    MOTION_FETCH_REQUEST,
    MOTION_FETCH_SUCCESS,

    UX_FETCH_FAIL,
    UX_FETCH_SUCCESS,
    UX_FETCH_REQUEST,
} from '../constants/projectConstants';

const fetchDigital = () => async (dispatch) => {
    try {
        dispatch({
            type:DIGITAL_FETCH_REQUEST
        });
        const digitalData = await sanityClient.fetch (
            `*[_type == "post" && title == 'Digital']{
                title,
                slug,
                mainImage {
                    asset -> {
                    _id,
                    url,
                    },
                    alt
                }
            }`
        );
        dispatch({
            type:DIGITAL_FETCH_SUCCESS,
            payload:digitalData
        })
    } catch (error) {
        dispatch({
            type:DIGITAL_FETCH_FAIL,
            payload:error.message
        });
    }
    
};

const fetchPrint = () => async (dispatch) => {
    try {
        dispatch({
            type:PRINT_FETCH_REQUEST
        });
        const printData = await sanityClient.fetch (
            `*[_type == "post" && title == 'Print']{
                title,
                slug,
                mainImage {
                    asset -> {
                    _id,
                    url,
                    },
                    alt
                }
            }`
        );
        dispatch({
            type:PRINT_FETCH_SUCCESS,
            payload:printData
        })
    } catch (error) {
        dispatch({
            type:PRINT_FETCH_FAIL,
            payload:error.message
        });
    } 
};


const fetchMotion = () => async (dispatch) => {
    try {
        dispatch({
            type:MOTION_FETCH_REQUEST
        });
        const motionData = await sanityClient.fetch (
            `*[_type == "post" && title == 'Motion']{
                title,
                slug,
                mainImage {
                    asset -> {
                    _id,
                    url,
                    },
                    alt
                }
            }`
        );
        dispatch({
            type:MOTION_FETCH_SUCCESS,
            payload:motionData
        })
    } catch (error) {
        dispatch({
            type:MOTION_FETCH_FAIL,
            payload:error.message
        });
    } 
};


const fetchUx = () => async (dispatch) => {
    try {
        dispatch({
            type:UX_FETCH_REQUEST
        });
        const uxData = await sanityClient.fetch (
            `*[_type == "post" && title == 'UX']{
                title,
                slug,
                mainImage {
                    asset -> {
                    _id,
                    url,
                    },
                    alt
                }
            }`
        );
        dispatch({
            type:UX_FETCH_SUCCESS,
            payload:uxData
        })
    } catch (error) {
        dispatch({
            type:UX_FETCH_FAIL,
            payload:error.message
        });
    } 
};

export {
    fetchUx,
    fetchDigital,
    fetchPrint,
    fetchMotion
  };