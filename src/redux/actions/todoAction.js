import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoType";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload,
});

export const clearTodo = () => ({
  type: CLEAR_TODO,
});

export const deleteTodo = (action) => ({
  type: DELETE_TODO,
  action: action,
});

export const toggleTodo = (action) => ({
  type: TOGGLE_TODO,
  action: action,
});
