import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import the root reducer
// import rootReducer from '../reducers/index';
// import baseComponents from './baseComponents';
// import baseSettings from './baseSettings';
// import templates from './templates/templates';
import content from './content/content'
import h from './helpers';

console.log(content)
console.log(h)

const conversationStarter = h.getUrlParameter('conversation')

const defaultState = {
  conversations: [
    conversationStarter ? conversationStarter : "0",
  ],
  // relatedQuestions,
}

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

// const enhancers = compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const store = createStore(
//   rootReducer,
  defaultState,
//   enhancers,
);

console.log(store)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index');
    store.replaceReducer(nextRootReducer);
  });
}


export default store;