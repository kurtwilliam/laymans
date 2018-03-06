import {
  ADD_COMPONENT,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      const { baseConversations } = store.getState();
      const newConvo = baseConversations.find(q => q.id === action.key);
      console.log('action', action)
      console.log('state',state)
      console.log('newConvo',newConvo)
      // console.log(newConvo)
      // if (state.conversations === undefined) {
      //   return {
      //     ...state,
      //     conversations: 
      //       conversations,
      //       newConvo,
      //   }
      // }
      // console.log('spread state',...state)
        
        return [
          ...state.slice(-1, action.index),
          action.key,
          ...state.slice(action.index),
        ]
    }

    default:
      return state;
  }
}