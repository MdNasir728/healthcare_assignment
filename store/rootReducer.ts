import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/authSlice'

const placeholderReducer = (state = {}) => state;

export const rootReducer = combineReducers({
    auth: authReducer,
    patients: placeholderReducer,
    notifications: placeholderReducer,
});