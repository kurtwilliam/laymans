import { combineReducers } from 'redux';
import conversationReducer from './conversation'

const rootReducer = combineReducers({
	conversations: conversationReducer,
	baseConversations: (state = []) => state,
});

export default rootReducer;
