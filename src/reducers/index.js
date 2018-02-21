import { combineReducers } from 'redux';
import store from '../utils/store';
import h from '../utils/helpers';

const rootReducer = combineReducers({
	conversations: (state = {}) => state
});

export default rootReducer;
