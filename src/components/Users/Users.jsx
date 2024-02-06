import React from "react";
import{useSelector} from "react-redux"
import User from "./User";
import AddUser from "./AddUser";

function Users(){
    
    const users =useSelector(myStore=>myStore.usersSlice.data) 
    return(
    <>
        <br/>
        <AddUser/>
        <br></br><br/>
        {users?.map((user)=><User user={user} key={user.name}/>)}
    </>
    )

}
export default Users;