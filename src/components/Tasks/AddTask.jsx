
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import useHttp from '../../hooks/useHttp';

export default function AddTask() {

  const {create}=useHttp()
  const [open, setOpen] = React.useState(false);
  const [cantAdd, setCantAdd] = React.useState(true);
  const refTitle=React.useRef("")
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
       Click here to add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Add title to the task, You can choose tags too.
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
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {['sport', 'learn'].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={cantAdd} onClick={()=>{handleClose();create("todos",{title:refTitle.current.value,tags:checked})}}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}