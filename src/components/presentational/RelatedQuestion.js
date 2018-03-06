import React, { Component } from 'react';
// import RelatedQuestion from './RelatedQuestion';
// import Definition from './Definition'; 
import Questions from '../../utils/content/questions/';
// import Parser from 'html-react-parser';

export default class Shell extends Component {
	render() {
    console.log(this)

    const { thisQuestion, index } = this.props;
    const qIndex = Questions.findIndex(i => i.id === index)
    console.log(thisQuestion, index, qIndex)

    return <li key={index} onClick={() => this.props.handleAdd(thisQuestion,qIndex)}>{Questions[qIndex].title}</li>
	}
}