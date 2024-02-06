
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';
import useHttp from '../../hooks/useHttp';

export default function AddPost() {
  const {create}=useHttp()
  const [open, setOpen] = React.useState(false);
  const [cantAdd, setCantAdd] = React.useState(true);
  const refTitle=React.useRef("")
  const refBody=React.useRef("")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon/>
       Click here to add Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Add title to the post.
          </DialogContentText>
          <TextField
            inputRef={refTitle}
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            onChange={()=>{refTitle.current.value==""?setCantAdd(true):setCantAdd(false)}}
          />
              <TextField
            inputRef={refBody}
            autoFocus
            margin="dense"
            label="Body"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={cantAdd} id='1'  onClick={()=>{handleClose();create("posts",{title:refTitle.current.value,body:refBody.current.value})}}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}