import React, { Component } from 'react';
// import RelatedQuestion from './RelatedQuestion';
// import Definition from './Definition'; 
import Questions from '../../utils/content/questions/';
// import Parser from 'html-react-parser';

export default class Shell extends Component {
	render() {
    const { index } = this.props;
    const qContent = Questions.find(i => i.id === index)

    return <li key={index} onClick={() => this.props.handleAdd(qContent,index)}>{qContent.title}</li>
	}
}