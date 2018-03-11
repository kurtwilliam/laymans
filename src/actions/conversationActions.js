import React from 'react';
import h from '../utils/helpers';
import Shell from '../components/containers/Shell';

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const ADD_DEFINITION = 'ADD_DEFINITION';
export const REMOVE_DEFINITION = 'REMOVE_DEFINITION';

export function addComponent(key,index) {
  return {
    type: ADD_COMPONENT,
    key,
    index
  };
}

export function addDefinition(defId,containerId) {
  return {
    type: ADD_DEFINITION,
    defId,
    containerId,
  };
}

export function removeDefinition(defId,containerId) {
  return {
    type: REMOVE_DEFINITION,
    defId,
    containerId,
  };
}