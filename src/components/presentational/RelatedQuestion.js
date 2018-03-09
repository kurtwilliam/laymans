import React, { Component } from 'react';
import Questions from '../../utils/content/questions/';

export default class Shell extends Component {
	render() {
    const { index } = this.props;
    const qContent = Questions.find(i => i.id === index)

    return <li key={index} className='related-question' onClick={() => this.props.handleAdd(qContent,index)}>{qContent.title}</li>
	}
}