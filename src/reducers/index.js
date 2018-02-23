import { combineReducers } from 'redux';
import conversation from './conversation'

const rootReducer = combineReducers({
	conversation,
	conversations: (state = {}) => state
});

export default rootReducer;
