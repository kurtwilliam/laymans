import React from 'react';
import h from '../utils/helpers';
import Shell from '../components/containers/Shell';

export const ADD_COMPONENT = 'ADD_COMPONENT';

export function addComponent(key,index) {
  return {
    type: ADD_COMPONENT,
    key,
    index
  };
}