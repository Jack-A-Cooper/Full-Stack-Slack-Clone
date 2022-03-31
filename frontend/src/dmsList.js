import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

// Global context
import globalContext from './globalContext';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-2.0),
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#3F0E40',
    color: 'white',
  },
  nested: {
    marginLeft: theme.spacing(-3.5),
  },
  nestedAdd: {
    marginLeft: theme.spacing(3.5),
  },
  nestedAddText: {
    marginLeft: theme.spacing(0.5),
  },
}));

/**
 *@return{any} nestedList
 */
export default function DmsList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  // Global Context
  const {setMobileOpen} = React.useContext(globalContext);

  const handleClickUser = () => {
    setMobileOpen(false);
  };

  const handleClickAdd = () => {
    setMobileOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button
        onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText primary="Direct Messages" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.nested}>
          <ListItem button onClick={handleClickUser}>
            <ListItemIcon>
            </ListItemIcon>
            <PersonIcon color='white' />
            <ListItemText primary="Username" />
          </ListItem>

          <ListItem button onClick={handleClickUser}>
            <ListItemIcon>
            </ListItemIcon>
            Icons and button for ea
            person go under ^here
          </ListItem>
          <ListItem button
            onClick={handleClickAdd}
            className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <AddBoxOutlinedIcon className={classes.nestedAdd}/>
            <ListItemText
              className={classes.nestedAddText} primary="Add Teammate" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

