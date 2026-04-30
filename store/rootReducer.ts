import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/authSlice'
import patientReducer from '@/features/patients/patientSlice'

const placeholderReducer = (state = {}) => state;

export const rootReducer = combineReducers({
    auth: authReducer,
    patients: patientReducer,
    notifications: placeholderReducer,
});