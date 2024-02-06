import {useEffect} from "react";
import useAxios from "axios-hooks";
import { setTasks } from "../redux/tasksSlice";
import { setUsers } from "../redux/usersSlice";
import { setPosts } from "../redux/postSlice";
import { useDispatch } from "react-redux";

const useLoad = (page)=>{
    const dispatch=useDispatch()
    const[{data,loading,error},refetch]=useAxios(`http://localhost:2004/api/${page}`)
    if(error)console.log(error.message);
    else if(page==='todos')
        dispatch(setTasks({data,refetch}))
    else if(page==='users')
        dispatch(setUsers({data,refetch}))
    else if(page==='posts')
        dispatch(setPosts({data,refetch}))
}

function LoadData(){

    useLoad('todos')
    useLoad('users')
    useLoad('posts')

}
export default LoadData;