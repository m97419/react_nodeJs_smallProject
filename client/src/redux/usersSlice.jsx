import {createSlice} from "@reduxjs/toolkit"

const initUsers={data:[],refetch:()=>{}}
const usersSlice=createSlice({
    name:"users",
    initialState:initUsers,
    reducers:{
        setUsers:(state,action)=>{
            state.data=action.payload.data
            state.refetch=action.payload.refetch
        }
    }
})
export const {setUsers}=usersSlice.actions
export default usersSlice.reducer