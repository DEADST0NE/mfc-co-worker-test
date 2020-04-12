import axios from '../../api';

import {
    JOB_POSITION_REQUEST,
    JOB_POSITION_SUCCESS,
    JOB_POSITION_ERROR,
} from '../constActions';

// Получение инструкций для фильтров
const getJobPositionRequested = () => ({
    type: JOB_POSITION_REQUEST
});
const getJobPositionSuccess = (item) => ({
    type: JOB_POSITION_SUCCESS,
    payload: item
});
const getJobPositionError = (error) => ({
    type: JOB_POSITION_ERROR,
    payload: error
});

const getJobPositionRequest = async (id) => {
    return await axios.get(`PersonalArea/${id}/jobPosition`)
    .then(response => response.data);
};
export const getJobPosition = (id) => (dispatch) => {
    dispatch(getJobPositionRequested());
    getJobPositionRequest(id)
        .then((data) => dispatch(getJobPositionSuccess(data)))
        .catch((err) => dispatch(getJobPositionError(err)));
}; 