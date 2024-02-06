import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import VerifiedIcon from '@mui/icons-material/Verified';
import useHttp from "../../hooks/useHttp";
import UpdateTask from './UpdateTask';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Task({task}) {
  const [expanded, setExpanded] = React.useState(false);
  const {deleteById,completeTask} =useHttp() 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Checkbox checked={task.complete} onClick={()=>completeTask(task._id)} icon={<VerifiedIcon />} checkedIcon={<VerifiedIcon />} />
          Title: {task.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <DeleteIcon onClick={()=>deleteById("todos",task._id)}/>
        </IconButton>
        <UpdateTask task={task}/>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           {task.tags.map(tag=><>{tag}   &nbsp;&nbsp;&nbsp;</>)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}