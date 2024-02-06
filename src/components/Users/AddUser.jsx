
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';
import useHttp from '../../hooks/useHttp';

export default function AddUser() {
    
  const {create}=useHttp()
  const [open, setOpen] = React.useState(false);
  const [cantAdd, setCantAdd] = React.useState(true);
  const refUserName=React.useRef("")
  const refName=React.useRef("")
  const refAddress=React.useRef("")
  const refPhone=React.useRef("")
  const refEmail=React.useRef("")

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
       Click here to add user
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Add user name, You can insert more datails.
          </DialogContentText>
          <TextField
            inputRef={refUserName}
            autoFocus
            margin="dense"
            label="User Name"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={refName}
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="standard"
            onChange={()=>{refName.current.value==""?setCantAdd(true):setCantAdd(false)}}
          />
          <TextField
            inputRef={refAddress}
            autoFocus
            margin="dense"
            label="Address"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={refPhone}
            autoFocus
            margin="dense"
            label="Phone"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={refEmail}
            autoFocus
            margin="dense"
            label="Email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={cantAdd} onClick={()=>{handleClose();create("users",{userName:refUserName.current.value,name:refName.current.value,address:refAddress.current.value,phone:refPhone.current.value,email:refEmail.current.value})}}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}