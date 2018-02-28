import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import the root reducer
import rootReducer from '../reducers/index';
import content from './content/content'
import h from './helpers';

// const conversationStarter = h.getUrlParameter('conversation')
// We need to first try to get a conversation starting point by a link - if there is none try an id? Else start with 0.0.0 
const initialConvo = content.findIndex(convo => convo.id === 'q0.0.0');

const conversations = {}
conversations[0] = content[initialConvo]
console.log(conversations)

const defaultState = {
  conversations,
  // relatedQuestions,
}

// console.log(h)

// const defaultState = {
//   template: {
//     TemplateId: h.getUrlParameter('template') || null,
//     ...templates[h.getUrlParameter('template')],
//     sidebar: {
//       key: 0,
//       activeSection: 'theme',
//     },
//     isFetching: !h.getUrlParameter('template'),
//     templates: {},
//     didInvalidate: false,
//     saving: false,
//   },
//   baseComponents,
//   baseSettings,
//   company: {
//     isFetching: true,
//   },
//   general: {
//     imageUploaderIsOpen: false,
//     modalIsOpen: false,
//   },
// };

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