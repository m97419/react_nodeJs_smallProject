import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import useHttp from "../../hooks/useHttp";
import UpdateUser from './UpdateUser';

export default function User({user}) {
  const {deleteById} =useHttp() 
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          User Name: {user.userName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {user.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {user.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={()=>deleteById("users",user._id)}>
          <DeleteIcon />
        </IconButton>
        <UpdateUser user={user}/>
      </CardActions>
    </Card>
  );
}