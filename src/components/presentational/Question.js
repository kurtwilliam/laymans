import React, { Component } from 'react';
import RelatedQuestion from './RelatedQuestion';
import Definition from './Definition'; 
import Questions from '../../utils/content/questions/';
import Parser from 'html-react-parser';

// import Crypto from '../presentational/Crypto';
// import Exchange from '../presentational/Exchange';

// Render Content - map through all components and choose which one to render! 

export default class Shell extends Component {
	constructor() {
		super();
    this.handleAdd = this.handleAdd.bind(this)
    this.renderDefinition = this.renderDefinition.bind(this)
	}

  renderDefinition() {
    console.log(this)
  }

  handleAdd(key, index) { this.props.dispatch(addComponent(key, index)) }; 

	render() {
    const thisQuestion = this.props.conversations[this.props.index];

    // map over related questions to display them
    const relatedQues = thisQuestion.relQues.map(q => {
      const qIndex = Questions.findIndex(i => i.id === q)
      return <li key={q}>{Questions[qIndex].title}</li>
    });

		return (
			<div className="question-cont">
        <h2 className="question-title">{thisQuestion.title}</h2>
        <div className="question-desc">{Parser(thisQuestion.desc)}</div>
        <div className="question-related_cont">
          <ul>{relatedQues}</ul>
        </div>
      </div>
		);
	}
}