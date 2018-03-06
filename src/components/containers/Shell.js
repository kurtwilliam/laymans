import React, { Component } from 'react';

import Question from '../presentational/Question';
// import RelatedQuestion from '../presentational/RelatedQuestion';
// import Definition from '../presentational/Definition'; - shell doesn't choose to render this one, each individual component should depending on if there is a definition in the JSON or not
import Crypto from '../presentational/Crypto';
import Exchange from '../presentational/Exchange';
import { addComponent } from '../../actions/conversationActions';

// Render Content - map through all components and choose which one to render! 
export default class Shell extends Component {
	constructor() {
		super();
    this.renderContent = this.renderContent.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

  handleAdd(id, i) { 
    console.log(id, i); 
    this.props.dispatch(addComponent(id, i)); 
  }; 

  // Render the conversations components
	renderContent(i) {
    const { conversations } = this.props;

    const type = conversations[i].id.charAt(0);
    if (type === "q") {
      return (
        <Question 
          key={type + i} 
          index={i} 
          {...this.props} 
          handleAdd={this.handleAdd}
        />
      )
    }
	}

	render() {
		return (
			<section className="shell">
        {Object.keys(this.props.conversations).map(i => this.renderContent(i))}
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

// Choose which component to render!

/*
 * Renders an "option" React Component (like <Input /> or <Color />)
 * @param {Function} dispatch - Redux's dispatch function
 * @param {Object} option - Option object from baseComponents
 * @param {Any} value - Current value for the option. If undefined, uses the option's defaultValue
 * @param {Function} onChange - Function that is called when the option's value changes
 * @param {Number} key - Key of option in the loop of options
 * @param {Number|String} component - Key of the component that this applies to
 * @param {Number} [colNum] - Column number that this applies to if in a Group
 * @returns {Object} - React Component
 */

// export default function renderContent(option) {
//   let input = false;
//   console.log(option)
// {{
//  sectionA: (
//    <SectionAComponent />
//  ),
//  sectionB: (
//    <SectionBComponent />
//  ),
//  sectionC: (
//    <SectionCComponent />
//  )
// }[section]}
//   return input;
// }

// export default function renderOptions(dispatch, option, value, onChange, key, component, colNum, company) {
//   const props = {
//     key,
//     component: parseInt(component, 10),
//     value: value !== undefined ? value : option.defaultValue,
//     onChange,
//     colNum,
//     dispatch,
//     company,
//     onFocus: () => dispatch(logState()),
//   };

//   let input;
//   console.log(...option)
//   switch (option.type) {
//     case 'text':
//       input = <Input {...props} {...option} />;
//       break;
//     case 'button': {
//       let action;
//       switch (option.action) {        
//         case 'editSocialLinks':
//           action = () => store.dispatch(openModal(<SocialLinks />));
//           break;          
//         default:
//           return false;
//       }
//       input = <Button {...props} {...option} action={action} />;
//       break;
//     }
//     case 'textarea':
//       input = <Textarea {...props} {...option} />;
//       break;
//     case 'dropdown':
//       input = <Dropdown {...props} {...option} />;
//       break;
//     case 'editor':
//       input = <TextEditor {...props} {...option} />;
//       break;
//     case 'number':
//       input = <NumericInput {...props} {...option} />;
//       break;
//     case 'color':
//       input = <Color {...props} {...option} />;
//       break;
//     case 'image':
//       input = <Image {...props} {...option} />;
//       break;
//     case 'position':
//       input = <Position {...props} {...option} />;
//       break;
//     case 'code':
//       input = <Code {...props} {...option} />;
//       break;
//     case 'message':
//       input = <Message {...props} {...option} />;
//       break;
//     case 'checkbox':
//       input = <Checkbox {...props} {...option} />;
//       break;
//     case 'checkboxes':
//       input = <Checkboxes {...props} {...option} />;
//       break;
//     case 'separator':
//       input = <Separator {...props} {...option} />;
//       break; 
//     case 'products':
//       input = <Products {...props} {...option} />;
//       break;
//     case 'link':
//       input = <Link {...props} {...option} />;
//       break;
//     default:
//       input = false;
//   }
//   return input;
// }