import {
  ADD_COMPONENT,
  ADD_DEFINITION,
  REMOVE_COMPONENT,
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
        ...state.slice(newIndex),
        action.key,
        ...state.slice(endOfArray,newIndex),
      ]
    }

    case ADD_DEFINITION: {
      // find containerId index in state to insert new def
      const insertIndex = state.findIndex(key => key.id === action.containerId) + 1;
      // find defId in definitions
      const definition = store.getState().definitions.find(def => def.id === action.defId);
      // if the next item after containerId exists and isn't already a definition then insert def
      const insertHereComponent = state[insertIndex];

      if (insertHereComponent !== undefined && insertHereComponent.id.charAt(0) === 'd') {
        return [
          ...state
        ];
      } else if (insertHereComponent !== undefined) {
        return [
          ...state.slice(0,insertIndex),
          definition,
          ...state.slice(insertIndex),
        ];
      }

      return [
        ...state.slice(0,insertIndex),
        definition,
        ...state.slice(insertIndex),
      ];
    }

    case REMOVE_COMPONENT: {
      // Remove item at the specified index
      const numIndex = parseInt(action.index)
      return [
        ...state.slice(0, numIndex),
        ...state.slice(numIndex + 1)
      ]
    }

    default:
      return state;
  }
}