import React, { Component } from 'react';
import Definitions from '../../utils/content/definitions';
import Parser from 'html-react-parser';

export default class Definition extends Component {
	


	render() {
		const { index, conversations } = this.props;
		return (
			<div className="definition-cont" onClick={(e) => this.props.helperFns.handleRemove(e, index)}>
				<h4>{conversations[index].title}</h4>
				<p>{conversations[index].desc}</p>
			</div>
		);
	}
}