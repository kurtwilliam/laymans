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
require('../../../style/style.scss');

export function mapStateToProps(state) {
	console.log(state)
	return {
		baseConversations: state.baseConversations,
		conversations: state.conversations,
		definitions: state.definitions,
	};
}

const App = connect(mapStateToProps)(Main);
export default App;