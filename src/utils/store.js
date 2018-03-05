import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import the root reducer
import rootReducer from '../reducers/index';
import baseConversations from './content/content';
import h from './helpers';

// const conversationStarter = h.getUrlParameter('conversation')
// We need to first try to get a conversation starting point by a link - if there is none try an id? Else start with 0.0.0 
const initialConvo = baseConversations.findIndex(convo => convo.id === 'q0.0.0');

const defaultState = {
	conversations: [
		baseConversations[initialConvo],
	],
	baseConversations,
}

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  defaultState,
  enhancers,
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index');
    store.replaceReducer(nextRootReducer);
  });
}
console.log(store);

export default store;