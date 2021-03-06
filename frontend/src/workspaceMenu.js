import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

// global context
import globalContext from './globalContext';

const useStyles = makeStyles((theme) => ({
  userPic: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(3),
      width: 0,
      borderRadius: 0,
      display: 'none',
      fontsize: 'large',
    },
  },
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

/**
 *@return{any} menu
 */
export default function MenuListWS() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // Global Context
  const {setWorkspace} = React.useContext(globalContext);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleClose1 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setWorkspace('CSE183 Summer 2021');
    setOpen(false);
  };
  const handleClose2 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setWorkspace('Workspace 2');
    setOpen(false);
  };
  const handleClose3 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setWorkspace('Workspace 3');
    setOpen(false);
  };

  /**
  *@param{event} event desc
  */
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <ArrowDropDownCircleIcon fontSize="large" style={{fill: 'white'}} />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current}
          role={undefined} transition disablePortal>
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ?
                  'center top' : 'center bottom',
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow"
                    onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose1}>
                      CSE183 Summer 2021</MenuItem>
                    <MenuItem onClick={handleClose2}>Workspace 2</MenuItem>
                    <MenuItem onClick={handleClose3}>Workspace 3</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
// source: https://material-ui.com/components/menus/
