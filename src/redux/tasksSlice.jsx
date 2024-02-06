import {createSlice} from "@reduxjs/toolkit"

const initTasks={data:[],refetch:()=>{}}
const tasksSlice=createSlice({
    name:"tasks",
    initialState:initTasks,
    reducers:{
        setTasks:(state,action)=>{
            state.data=action.payload.data
            state.refetch=action.payload.refetch
        }
    }
})
export const {setTasks}=tasksSlice.actions
export default tasksSlice.reducer