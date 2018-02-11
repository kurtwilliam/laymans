import React, { Component } from 'react';

export default class Shell extends Component {
	constructor() {
		super();
		this.renderContent = this.renderContent.bind(this);
	}

  // Render the content components
	renderContent() {

    return (
      <ContentWrapper
        {...this.props}
      />
    );
	}

	render() {
    console.log(this)
		return (
			<section className="shell">
        {Object.keys(this.props.components).map(i => this.renderContent(i))}
      </section>
		);
	}
}

/*
const initialState = [
  {id: '1', content: {title: 'item 1'}},
  {id: '2', content: {title: 'item 2'}},
  {id: '3', content: {title: 'item 3'}}
]

const action = {
  type: 'update',
  id: '2',
  payload: { content: {title: 'item 2 updated' }}
}

const reducer = (state = intialState, action = {}) => {
  switch(action.type){
    case 'update': 
      const updatedItems = state.map(item => {
        if(item.id === action.id){
          return { ...item, ...action.payload }
        }
        return item
      })
      return updatedItems
      
    default:
      return state
  }
}
https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456

*/