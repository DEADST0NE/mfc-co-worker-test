import { combineReducers } from 'redux';

import reducerJobPosition from './jobPosition/reduser';

const reducers = combineReducers({ 
    reducerJobPosition,
});

export default reducers;