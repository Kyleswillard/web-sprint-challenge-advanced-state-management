import { bindActionCreators } from 'redux'
import {
    ADD_SMURF,
    FETCH_SMURF,
    SET_ERROR,
    FETCH_SMURF_SUCCESS,
} from '../types'

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return { ...state, isLoading: true }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload],
                isLoading: false,
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
            }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}

export default reducer

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
