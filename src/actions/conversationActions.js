import React from 'react';
import h from '../utils/helpers';
import Shell from '../components/containers/Shell';

export const ADD_COMPONENT = 'ADD_COMPONENT';


function addComp(key, index, compObj) {
  return {
    type: ADD_COMPONENT,
    key,
    index,

    // Optional; expects a fully-fledged object for a component
    compObj,
  };
}

export function addComponent(key, index, compObj) {
  return (dispatch) => {
    dispatch(addComp(key, index, compObj));
  };
}
