import { configureStore } from "@reduxjs/toolkit";
import stableReducer from '../feature/stable.slice';
import listReducer from '../feature/list.slice';

export default configureStore({
    reducer: {
        stable: stableReducer,
        list: listReducer
    }
});