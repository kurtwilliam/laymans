import {
  ADD_COMPONENT,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      const storeState = store.getState()
      console.log('spread state',...state)
      console.log('state',state)
      console.log('action',action)
      console.log('storestate',storeState)
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}