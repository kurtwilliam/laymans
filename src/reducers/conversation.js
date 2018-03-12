import {
  ADD_COMPONENT,
  ADD_DEFINITION,
  REMOVE_DEFINITION,
} from '../actions/conversationActions';
import store from '../utils/store';
import h from '../utils/helpers';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      const endOfArray = state.length;
      const newIndex = action.index;

      // check to see if this convo already exists in state, if so don't show it
      const existingKey = state.findIndex(key => key.id === newIndex);
      if (existingKey !== -1) {
        return state;
      }

      return [
        ...state.slice(action.index),
        action.key,
        ...state.slice(endOfArray,action.index),
      ]
    }

    case ADD_DEFINITION: {
      // const endOfArray = state.length;
      // const newIndex = action.index;
      console.log('action',action)
      console.log('state',state)
      // find containerId index in state
      // find defId in state
      // add the defId object after containerId
      // if the next item after containerId isn't already a

      // check to see if this convo already exists in state, if so don't show it
      // const existingKey = state.findIndex(key => key.id === newIndex);
      // if (existingKey !== -1) {
      //   return state;
      // }

      return [ 
        ...state,
      ]

      // return [
        // ...state.slice(action.index),
        // action.key,
        // ...state.slice(endOfArray,action.index),
      // ]
    }

    case REMOVE_DEFINITION: {
      const endOfArray = state.length;
      const newIndex = action.index;
      console.log('action',action)
      console.log('state',state)
      // console.log('state',state)
      // console.log('state',state)

      // check to see if this convo already exists in state, if so don't show it
      // const existingKey = state.findIndex(key => key.id === newIndex);
      // if (existingKey !== -1) {
      //   return state;
      // }

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