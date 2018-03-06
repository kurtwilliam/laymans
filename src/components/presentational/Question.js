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
    this.renderDefinition = this.renderDefinition.bind(this);
	}

  renderDefinition() {
    // console.log('definition',this)
  }

	render() {
    const thisQuestion = this.props.conversations[this.props.index];


		return (
			<div className="question-cont">
        <h2 className="question-title">{thisQuestion.title}</h2>
        <div className="question-desc">{Parser(thisQuestion.desc)}</div>
        <div className="question-related_cont">
          {thisQuestion.relQues &&
          <ul>{thisQuestion.relQues.map(index => <RelatedQuestion key={index} handleAdd={this.props.handleAdd} index={index} />)}</ul>
          }
        </div>
      </div>
		);
	}
}