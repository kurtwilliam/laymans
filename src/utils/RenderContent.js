// This file chooses which type of component to render

import React from 'react';
// import { openModal } from '../actions/generalActions';
// import { logState } from '../actions/templateActions';
// import SocialLinks from '../components/global/Modals/SocialLinks';
// import store from './store';

import Question from '../components/presentational/Question';
import RelatedQuestion from '../components/presentational/RelatedQuestion';
import Definition from '../components/presentational/Definition';
import Crypto from '../components/presentational/Crypto';
import Exchange from '../components/presentational/Exchange';

// import Button from '../components/global/Options/Button';
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

export default function renderOptions(option) {
	let input = false;
	console.log(option)
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
	return input;
}

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