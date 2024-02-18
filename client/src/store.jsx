import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./redux/tasksSlice";
import usersSlice from "./redux/usersSlice";
import postsSlice from "./redux/postSlice";

const myStore=configureStore({
    reducer:{
        tasksSlice,
        usersSlice,
        postsSlice
    }
})
export default myStore