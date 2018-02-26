import {
  ADD_COMPONENT,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      console.log(state)
      console.log(action)
      return {
        ...state,
        
      };
    }

    default:
      return state;
  }
}