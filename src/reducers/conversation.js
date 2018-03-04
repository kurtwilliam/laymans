import {
  ADD_COMPONENT,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      const { baseConversations, conversations } = store.getState();
      const newConvo = baseConversations.find(q => q.id === action.key);
      console.log('conversations', conversations)
      console.log('action', action)
      console.log(newConvo)
      if (state.conversations === undefined) {
        return {
          ...state,
          conversations: 
            conversations,
            newConvo,
        }
      }
      console.log('spread state',...state)
      console.log('state',state)
      console.log(baseConversations)
      return {
        ...state,
        conversations: [...state.conversations, newConvo]
      };
    }

    default:
      return state;
  }
}