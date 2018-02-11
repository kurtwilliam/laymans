// import React, { Component } from 'react';
// import Main from './Main';

// export default class App extends Component {
//   render() {
//     return (
//       <Main />
//     );
//   }
// }

// template: state.template,
// baseComponents: state.baseComponents,
// baseSettings: state.baseSettings,
// company: state.company,
// general: state.general,

import { connect } from 'react-redux';
import Main from './Main';

export function mapStateToProps(state) {
  return {
    
  };
}

const App = connect(mapStateToProps)(Main);
export default App;