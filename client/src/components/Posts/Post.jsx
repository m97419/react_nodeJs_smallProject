import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import useHttp from "../../hooks/useHttp";
import UpdatePost from './UpdatePost'

export default function Post({post}) {
  const {deleteById} =useHttp() 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" >
          Title: {post.title}
        </Typography><br/>
        <Typography variant="body2" color="text.secondary">
          Body: {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  onClick={()=>deleteById("posts",post._id)}>
          <DeleteIcon/>
        </IconButton>
        <UpdatePost  post={post}/>      
      </CardActions>
    </Card>
  );
}