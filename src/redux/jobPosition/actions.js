import axios from '../../api';

import {
    JOB_POSITION_HISTORY_REQUEST,
    JOB_POSITION_HISTORY_SUCCESS,
    JOB_POSITION_HISTORY_ERROR,
} from '../constActions';

// Получение инструкций для фильтров
const getJobPositionHistoryRequested = () => ({
    type: JOB_POSITION_HISTORY_REQUEST
});
const getJobPositionHistorySuccess = (item) => ({
    type: JOB_POSITION_HISTORY_SUCCESS,
    payload: item
});
const getJobPositionHistoryError = (error) => ({
    type: JOB_POSITION_HISTORY_ERROR,
    payload: error
});

const getJobPositionHistoryRequest = async (id) => {
    return await axios.get(`PersonalArea/${id}/jobPositionHistory`)
    .then(response => response.data);
};
export const getJobPositionHistory = (id) => (dispatch) => {
    dispatch(getJobPositionHistoryRequested());
    getJobPositionHistoryRequest(id)
        .then((data) => dispatch(getJobPositionHistorySuccess(data)))
        .catch((err) => dispatch(getJobPositionHistoryError(err)));
}; 