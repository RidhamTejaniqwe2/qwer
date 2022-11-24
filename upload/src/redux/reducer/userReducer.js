import {
  ADD_DATA,
 REMOVE_DATA,
  UPDATE_DATA,
} from '../Action/ActionType';

const initialState = {
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        userList: state.userList.concat(action.data),
      };
    case REMOVE_DATA:
      return {
        ...state,
        userList: state.userList.filter(item => item.id != action.data),
      };
    case UPDATE_DATA:
      return {
        ...state,
        userList: state.userList.map(el =>
          el.id === action.data.id
            ? {...el, name: action.data.name, address: action.data.address,recordItem:action.data.recordItem}
            : el,
        ),
      };
   
    default:
      return state;
  }
};
