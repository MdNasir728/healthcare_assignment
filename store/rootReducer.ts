import { combineReducers } from "@reduxjs/toolkit";

const placeholderReducer = (state = {}) => state;

export const rootReducer = combineReducers({
  auth: placeholderReducer,
  patients: placeholderReducer,
  notifications: placeholderReducer,
});