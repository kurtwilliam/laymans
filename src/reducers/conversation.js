import {
  ADD_COMPONENT,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      // const { baseConversations } = store.getState();
      // const newConvo = baseConversations.find(q => q.id === action.index);
      console.log('action', action)
      console.log('state',state)
      console.log('state',state.length)
      const endOfArray = state.length

      // console.log('newConvo',newConvo)
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
      // if (newConvo !== undefined) {
        return [
          ...state.slice(action.index),
          action.key,
          ...state.slice(endOfArray,action.index),
        ]
      // }
        
    }

    default:
      return state;
  }
}