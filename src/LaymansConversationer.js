// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/containers/App';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './utils/store';
import App from './components/containers/App';

const renderApp = RApp => {
  render(
    <Provider store={store}>
      <AppContainer>
        <RApp />
      </AppContainer>
    </Provider>,
    document.querySelector('.mount'));
};

renderApp(App);

if (module.hot) {
  module.hot.accept();
}