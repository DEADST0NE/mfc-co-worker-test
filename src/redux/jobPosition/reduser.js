import {
    JOB_POSITION_HISTORY_REQUEST,
    JOB_POSITION_HISTORY_SUCCESS,
    JOB_POSITION_HISTORY_ERROR,
} from '../constActions';

const initialState = {
    jobPositionHistory: null,
    loading: true,
    error: false
} 
const reducerJobPositionHistory = (state = initialState, action) => {
    switch(action.type){
        case JOB_POSITION_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case JOB_POSITION_HISTORY_SUCCESS: 
            return {
                ...state,
                jobPositionHistory: action.payload,
                loading: false,
                error: false
            }

        case JOB_POSITION_HISTORY_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }

        default: 
            return state;
    }
}

export default reducerJobPositionHistory;

