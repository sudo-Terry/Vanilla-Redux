import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const store = createStore(reducer);

const reducer = (state = [], action) => {
  switch(action.type){
    case ADD:
      return [ ...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

export const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  };
};

export default store;