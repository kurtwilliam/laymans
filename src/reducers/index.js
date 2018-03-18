import { combineReducers } from 'redux';
import conversations from './conversation'

const rootReducer = combineReducers({
	conversations,
	baseConversations: (state = []) => state,
	definitions: (state = []) => state,
});

export default rootReducer;
