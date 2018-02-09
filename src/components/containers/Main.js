import React, { Component } from 'react';
import Shell from '../Shell';
import Footer from './Footer';

export default class Main extends Component {
	render() {
		return (
			<div className="main">
				<Shell />
				<Footer />
			</div>
		);
	}
}