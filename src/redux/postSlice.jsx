import {createSlice} from "@reduxjs/toolkit"

const initPosts={data:[],refetch:()=>{}}
const postsSlice=createSlice({
    name:"post",
    initialState:initPosts,
    reducers:{
        setPosts:(state,action)=>{
            state.data=action.payload.data
            state.refetch=action.payload.refetch
        }
    }
})
export const {setPosts}=postsSlice.actions
export default postsSlice.reducer