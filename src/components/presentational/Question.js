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
    this.accordian = this.accordian.bind(this);
	}

  renderDefinition() {
    // console.log('definition',this)
  }

  accordian(e) {
    this.props.expandOrShrinkAccordian(e);
  }

	render() {
    const thisQuestion = this.props.conversations[this.props.index];


		return (
			<div className="question-cont">
        <h2 className="question-title accordian-click" onClick={(e) => this.accordian(e)}>{thisQuestion.title}</h2>
        <div className="question-desc accordian-expand" style={{maxHeight:'1000px',}}>
          {Parser(thisQuestion.desc)}
          <div className="question-related_cont">
            {thisQuestion.relQues &&
            <ul className='question-list'>{thisQuestion.relQues.map(index => <RelatedQuestion key={index} handleAdd={this.props.handleAdd} index={index} />)}</ul>
            }
          </div>
        </div>
      </div>
		);
	}
}