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

  componentDidMount() {
    // on rerender get the definition buttons and add an event listener to them, to render the definition onclick
    const allDefButtons = document.querySelectorAll('.definition-onclick')

    for (let i = 0; i < allDefButtons.length; i++) {
      allDefButtons[i].addEventListener('click', (e) => {
        this.renderDefinition(e);
      })
    }
  }

  renderDefinition(e) {
    const defId = e.currentTarget.dataset.def;
    const containerId = e.currentTarget.closest('.question-cont.get-id').id;
    if (defId && containerId) {
      this.props.dispatch(this.props.helperFns.handleDefAdd(defId, containerId))
    }
  }

  accordian(e) {
    this.props.helperFns.expandOrShrinkAccordian(e);
  }

	render() {
    const thisQuestion = this.props.conversations[this.props.index];

		return (
			<div className="question-cont get-id" id={thisQuestion.id}>
        <h2 className="question-title accordian-click" onClick={(e) => this.accordian(e)}>{thisQuestion.title}</h2>
        <div className="question-desc accordian-expand" style={{maxHeight:'1000px',}}>
          {Parser(thisQuestion.desc)}
          <div className="question-related_cont">
            {thisQuestion.relQues &&
            <ul className='question-list'>{thisQuestion.relQues.map(index => <RelatedQuestion key={index} handleAdd={this.props.helperFns.handleAdd} index={index} />)}</ul>
            }
          </div>
        </div>
      </div>
		);
	}
}