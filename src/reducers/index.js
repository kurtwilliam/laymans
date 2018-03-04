import { combineReducers } from 'redux';
import conversationReducer from './conversation'

const rootReducer = combineReducers({
	conversations: (state = {}) => state,
	baseConversations: (state = []) => state,
});

export default rootReducer;
