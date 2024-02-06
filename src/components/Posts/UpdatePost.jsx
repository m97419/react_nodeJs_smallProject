import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import useHttp from '../../hooks/useHttp';
import { useRef } from 'react';

export default function UpdatePost({post}) {

  const {updateById} = useHttp()
  const refTitle=useRef(post.title)
  const refBody=useRef(post.body)
  const [open, setOpen] = React.useState(false);
  const [cantUpdate, setCantUpdate] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <React.Fragment>
    <IconButton aria-label="share" >
          <EditOutlinedIcon onClick={handleClickOpen} />
    </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{post.title}</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={refTitle}
            autoFocus
            margin="dense"
            label="Title"
            type="string"
            variant="standard"
            defaultValue={post.title}
            onChange={()=>{refTitle.current.value==""?setCantUpdate(true):setCantUpdate(false)}}
          /><br/>
          <TextField
            inputRef={refBody}
            autoFocus
            margin="dense"
            label="Body"
            type="string"
            variant="standard"
            defaultValue={post.body}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={cantUpdate} onClick={()=>{handleClose();updateById("posts",{_id:post._id,title:refTitle.current.value,body:refBody.current.value})}}>Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </div>
  );
}
