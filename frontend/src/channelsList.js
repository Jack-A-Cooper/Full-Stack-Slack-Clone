// Credit: Material UI

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

// Global context
import globalContext from './globalContext';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-0.0),
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#3F0E40',
    color: 'white',
  },
  nested: {
    marginTop: theme.spacing(-2.0),
    marginLeft: theme.spacing(-3.5),
  },
  nestedAdd: {
    marginTop: theme.spacing(-2.0),
    marginLeft: theme.spacing(-1),
  },
  nestedAddText: {
    marginTop: theme.spacing(-2.0),
    marginLeft: theme.spacing(0.5),
  },
  option: (channel) => ({
    width: 400,
    maxWidth: 400,
    height: 50,
    left: -30,
    padding: 20,
  }),
}));

/**
 *@return{any} nestedList
 */
export default function ChannelsList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [channel, setChannel] = React.useState(false);

  // Global Context
  const {setMobileOpen} = React.useContext(globalContext);
  const handleChannel1 = () => {
    setChannel('Assignment 1');
    setMobileOpen(false);
  };
  const handleChannel2 = () => {
    setChannel('Assignment 2');
    setMobileOpen(false);
  };
  const handleChannel3 = () => {
    setChannel('Assignment 3');
    setMobileOpen(false);
  };
  const handleChannel4 = () => {
    setChannel('Assignment 4');
    setMobileOpen(false);
  };
  const handleChannelGen = () => {
    setChannel('General');
    setMobileOpen(false);
  };

  const handleChannelAdd = () => {
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
      <ListItem button onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText primary="Channels" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button
            selected = {channel === 'Assignment 1'}
            onClick={handleChannel1}
            className={classes.option}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="# Assignment 1" />
          </ListItem>
          <ListItem button
            selected = {channel === 'Assignment 2'}
            onClick={handleChannel2}
            className={classes.option}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="# Assignment 2" />
          </ListItem>
          <ListItem button
            selected = {channel === 'Assignment 3'}
            onClick={handleChannel3}
            className={classes.option}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="# Assignment 3" />
          </ListItem>
          <ListItem button
            selected = {channel === 'Assignment 4'}
            onClick={handleChannel4}
            className={classes.option}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="# Assignment 4" />
          </ListItem>
          <ListItem button
            onClick={handleChannelGen}
            selected = {channel === 'General'}
            className={classes.option}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="# General" />
          </ListItem>
          <ListItem button
            onClick={handleChannelAdd}
            className={classes.option}>
            <ListItemIcon>
            </ListItemIcon>
            <AddBoxOutlinedIcon className={classes.nestedAdd}/>
            <ListItemText
              className={classes.nestedAddText} primary="Add Channel" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
