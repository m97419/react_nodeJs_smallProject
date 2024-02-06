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
import { CottageRounded } from '@mui/icons-material';

export default function UpdateUser({ user }) {

  const { updateById } = useHttp()
  const refUserName = React.useRef(user.userName)
  const refName = React.useRef(user.name)
  const refAddress = React.useRef(user.address)
  const refPhone = React.useRef(user.phone)
  const refEmail = React.useRef(user.email)
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
          <DialogTitle>{user.title}</DialogTitle>
          <DialogContent>
            <TextField
              inputRef={refUserName}
              autoFocus
              margin="dense"
              label="User Name"
              fullWidth
              variant="standard"
              defaultValue={user.userName}
            />
            <TextField
              inputRef={refName}
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              variant="standard"
              defaultValue={user.name}
              onChange={()=>{refName.current.value==""?setCantUpdate(true):setCantUpdate(false)}}
            />
            <TextField
              inputRef={refAddress}
              autoFocus
              margin="dense"
              label="Address"
              fullWidth
              variant="standard"
              defaultValue={user.address}
            />
            <TextField
              inputRef={refPhone}
              autoFocus
              margin="dense"
              label="Phone"
              fullWidth
              variant="standard"
              defaultValue={user.phone}
            />
            <TextField
              inputRef={refEmail}
              autoFocus
              margin="dense"
              label="Email"
              fullWidth
              variant="standard"
              defaultValue={user.email}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button disabled={cantUpdate} onClick={() => {
              handleClose();
              updateById("users", { _id: user._id, userName: refUserName.current.value, name: refName.current.value, address: refAddress.current.value, phone: refPhone.current.value, email: refEmail.current.value })
            }}>Update</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
