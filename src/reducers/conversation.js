import {
  ADD_COMPONENT,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      const endOfArray = state.length
      return [
        ...state.slice(action.index),
        action.key,
        ...state.slice(endOfArray,action.index),
      ]
    }

    default:
      return state;
  }
}