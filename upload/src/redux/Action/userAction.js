
import {
  ADD_DATA,
  REMOVE_DATA,
  UPDATE_DATA,
} from './ActionType';

export const addData = data => {
  return {
    type: ADD_DATA,
    data: data,
  };
};
export const removeData = data => {
  return {
    type: REMOVE_DATA,
    data: data,
  };
};
export const updateData = data => {
  console.log("data details*******",data)
  return {
    type: UPDATE_DATA,
    data: data,
  };
};

