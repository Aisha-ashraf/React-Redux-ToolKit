
import {configureStore} from '@reduxjs/toolkit';

import todoReducer from "/src/features/Todo/todoSlice.js";

export const store = configureStore({
    reducer:todoReducer
})