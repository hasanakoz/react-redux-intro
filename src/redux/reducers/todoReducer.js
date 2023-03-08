import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoType";

const initialState = {
  todoList: [{ id: new Date().getTime(), text: "", completed: false }],
};

export const todoReducer = (
  state = initialState,
  { type, payload, action }
) => {
  switch (type) {
    case ADD_TODO:
      // state.todoList.forEach((item) => console.log(item.id));

      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    case CLEAR_TODO:
      return initialState;

    case DELETE_TODO:
      let newList = state.todoList.filter((elem) => elem.id !== action);

      return {
        ...state.todoList,
        todoList: newList,
      };

    case TOGGLE_TODO:
      let todoIndex = state.todoList.findIndex((item) => item.id === action);
      state.todoList[todoIndex].completed =
        !state.todoList[todoIndex].completed;
      // // state.todoList
      return {
        ...state,
      };

    default:
      return state;
  }
};
