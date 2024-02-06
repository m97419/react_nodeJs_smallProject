import axios  from "axios"
import { useSelector } from "react-redux"

function useHttp() {
    const refetchposts=useSelector(myStore=>myStore.postsSlice.refetch)
    const refetchusers=useSelector(myStore=>myStore.usersSlice.refetch)
    const refetchtasks=useSelector(myStore=>myStore.tasksSlice.refetch)    
    const prePath = "http://localhost:2004"

    const refetch=(path)=>{
        if(path==="todos")
        refetchtasks()
        if(path==="users")
        refetchusers()
        if(path==="posts")
        refetchposts()
    }

    const deleteById = async (path,id)=>{
        try{
            const data={ id }
            const response = await axios.delete(`${prePath}/api/${path}`,{data});
            refetch(path)
        }
        catch(error){
            console.log(error) 
        }    
    }

    const updateById = async(path,obj)=>{
        try{
            const response= await axios.put(`${prePath}/api/${path}`,obj)
            refetch(path)
        }
        catch(error){
            console.log(error)
        }
    }

    const completeTask = async (id)=>{
        try{
            const response= await axios.put(`${prePath}/api/todos/complete/${id}`)
            refetchtasks()
        }
        catch(error){
            console.log(error)
        }
    }

    const create=async(path,obj)=>{
        try{
            const response= await axios.post(`${prePath}/api/${path}/`,obj)
            refetch(path)
        }
        catch(error){
            console.log(error)
        }
    }

    return {deleteById,updateById,completeTask,create}
}


export default useHttp