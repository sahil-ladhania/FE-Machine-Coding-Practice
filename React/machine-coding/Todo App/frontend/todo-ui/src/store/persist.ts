import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './/slices/todoSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['todos']
};

const rootReducer = combineReducers({
  todos: todosReducer 
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);