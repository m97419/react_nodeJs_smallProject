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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function UpdateTask({task}) {

  const {updateById} = useHttp()
  const refTitle=useRef(task.title)
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(task.tags);
  const [cantUpdate, setCantUpdate] = React.useState(false);

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
    <div>
    <React.Fragment>
    <IconButton aria-label="share" >
          <EditOutlinedIcon onClick={handleClickOpen} />
    </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{task.title}</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={refTitle}
            autoFocus
            margin="dense"
            label="Title"
            type="string"
            variant="standard"
            defaultValue={task.title}
            onChange={()=>{refTitle.current.value==""?setCantUpdate(true):setCantUpdate(false)}}
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
          <Button disabled={cantUpdate} onClick={()=>{handleClose();updateById("todos",{_id:task._id,tags:checked
          ,title:refTitle.current.value?refTitle.current.value:task.title})}}>Update</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </div>
  );
}
