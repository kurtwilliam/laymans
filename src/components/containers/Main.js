import React, { Component } from 'react';
import Shell from './Shell';
import Footer from './Footer';

export default class Main extends Component {
	render() {
		console.log(this)
		return (
			<div className="main">
				<Shell {...this.props}/>
				<Footer />
			</div>
		);
	}
}