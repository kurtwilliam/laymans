import React, { Component } from 'react';
import Definitions from '../../utils/content/Definitions';
import Parser from 'html-react-parser';

export default class Definition extends Component {
	


	render() {
		const { index } = this.props;
		const qContent = Questions.find(i => i.id === index)

		// return <li key={index} className='related-question' onClick={() => this.props.handleAdd(qContent,index)}>{qContent.title}</li>
		return (
			<div className="definition-cont">
				
			</div>
		);
	}
}