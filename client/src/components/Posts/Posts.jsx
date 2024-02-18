import React from "react";
import{useSelector} from "react-redux"
import Post from "./Post";
import AddPost from "./AddPost";
function Posts(){
    const posts =useSelector(myStore=>myStore.postsSlice.data)  
      return(
     <> 
        <br/>
        <AddPost/>     
        <br></br><br/>
        {posts?.map((post)=><Post post={post} key={post.title}/>)}
     </>
  
      )
  }
  export default Posts;