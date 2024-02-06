import React from "react";
import{useSelector} from "react-redux"
import Task from "./Task";
import AddTask from "./AddTask";

function Tasks(){

    const tasks =useSelector(myStore=>myStore.tasksSlice.data) 
    return(
    <> 
      <br/>
      <AddTask/>
      <br></br><br/>
      {tasks?.map((task)=><Task task={task} key={task.title}/>)}
    </>

    )
}
export default Tasks;