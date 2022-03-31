import React from 'react';
import {alpha, makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuListProfile from './profileMenu';
import MenuListWS from './workspaceMenu';
import QuestionAnswerTwoToneIcon
  from '@material-ui/icons/QuestionAnswerTwoTone';
import ChannelsList from './channelsList';
import DmsList from './dmsList';
import MenuIcon from '@material-ui/icons/Menu';
import LabelBottomNavigation from './bottomNavBar';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

// global context
import {GlobalProvider} from './globalContext';

const drawerWidth = 240;
// soruce: https://material-ui.com/components/drawers/

const useStyles = makeStyles((theme) => ({
  DMSnMentionsText: {
    color: 'white',
    top: 5,
    marginRight: theme.spacing(-3),
  },
  roott: {
    width: '500px',
    backgroundColor: theme.palette.background.paper,
  },
  sidebarIcons: {
    color: 'white',
    width: '30px',
  },
  sideIconsMargin: {
    marginTop: theme.spacing(-3),
    height: 30,
  },
  hurry: {
    marginLeft: theme.spacing(-2.5),
  },
  search: {
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'marginRight': theme.spacing(19),
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      bordercolor: alpha(theme.palette.common.white, 0.25),
      borderStyle: 'solid',
    },
    'width': '110%',
    [theme.breakpoints.down('xs')]: {
      width: 0,
      borderRadius: 0,
      display: 'none',
    },
  },
  userIconTopCorner: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(3),
      width: 0,
      borderRadius: 0,
      display: 'none',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xl')]: {
      width: '10ch',
    },
  },
  back: {
    display: 'flex',
  },
  drawer: {
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // CREDIT: Fixing Drawer overlay to be below appbar
  // https://stackoverflow.com/questions/46706676/clipped-drawer-in-material-ui
  // zIndex: needs to be higher than component it needs to be over
  appBar: {
    zIndex: 50,
    backgroundColor: '#3F0E40',
    height: '10%',
    marginTop: theme.spacing(-1),
  },
  menuButton: {
    marginLeft: theme.spacing(30),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    fontSize: 'medium',
  },
  // This is what I was playing with to figure out the
  // MEDIUM screen size button popping up.
  // The med size button can be gotten from:
  // import MenuIcon from '@material-ui/icons/Menu';
  // Should probably be placed next to the "workspace
  // name will go here" div/span
  menuButtonMed: {
    display: 'none',
    [theme.breakpoints.between('lg', 'xl')]: {
      display: 'flex',
    },
    marginLeft: theme.spacing(-1.4),
    fontSize: 'large',
    color: 'white',
  },
  menuButtonSm: {
    display: 'none',
    [theme.breakpoints.between('sm', 'sm')]: {
      display: 'flex',
    },
    marginLeft: theme.spacing(-1.4),
    fontSize: 'large',
    color: 'white',
  },
  menuButtonDesktop: {
    marginLeft: theme.spacing(22),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    size: 'small',
    fontSize: 'small',
  },
  workspaceName: {
    width: '22%',
    whiteSpace: 'nowrap',
    fontSize: 'large',
    marginLeft: theme.spacing(-2),
    [theme.breakpoints.down('xs')]: {
      padding: '1px',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    zIndex: 1,
    paddingTop: theme.spacing(3.6),
    width: drawerWidth,
    backgroundColor: '#3F0E40',
    marginLeft: theme.spacing(-1.8),
  },
  content: {
    flexShrink: 1,
    padding: theme.spacing(3),
  },
  option: (selectedListItem) => ({
    width: 400,
    maxWidth: 400,
    height: 50,
    left: -30,
    backgroundColor: selectedListItem.isSelected ? '#3f51b5' : '#3f51b5',
    padding: 20,
  }),
}));
// source: https://material-ui.com/components/drawers/

/**
 *
 * @param {any} props
 * @return {any} drawer
 */
export default function ResponsiveDrawer(props) {
  // const [obj, setState] = useState([]);
  // useEffect( () => {
  //  fetch('http://localhost:3010/v0/channels?ws=CSE183%20Summer%202021&cn=%23%20Assignment%201').then(
  //    (res) =>
  //    setState(res.json()),
  //  );
  // });

  const {window} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedListItem, setSelectedItem] = React.useState(false);
  // GLOBAL CONTEXT
  const [currentWorkspace, setWorkspace] = React.useState('CSE183 Summer 2021');
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [userStatus, setUserStatus] = React.useState('Active');
  const [userName] = React.useState('PLACEHOLDER_USER');

  const handleListItemClick1 = (event) => {
    // close window when selected
    // double check if mobile is open first
    if (mobileOpen) {
      setMobileOpen(!mobileOpen);
    }
    setSelectedItem('All DMs');
  };
  const handleListItemClick2 = (event) => {
    // close window when selected
    // double check if mobile is open first
    if (mobileOpen) {
      setMobileOpen(!mobileOpen);
    }
    setSelectedItem('Mentions');
  };

  const getSelected = (input) => {
    if (selectedListItem === input) {
      return true;
    }
    return false;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <GlobalProvider value={{mobileOpen, setMobileOpen}}>
      <div>
        <div className={classes.toolbar}/>
        <List className={classes.DMSnMentionsText}>
          <ListItem button className={classes.sideIconsMargin} id = 'All DMs'
            selected = {getSelected('All DMs')}
            onClick={(event) => handleListItemClick1(event)}>
            <QuestionAnswerTwoToneIcon
              className={classes.sidebarIcons}/>
            <div id = 'All DMs'
              useStyles={{'fontSize': 'medium'}}>All DMs</div>
          </ListItem>
          <ListItem button id = 'Mentions'
            selected = {getSelected('Mentions')}
            onClick={(event) => handleListItemClick2(event)}>
            <AlternateEmailIcon className={classes.sidebarIcons} />
            <div id = 'Mentions'
              useStyles={{'fontSize': 'medium'}}>Mentions</div>
          </ListItem>
        </List>
        <ChannelsList />
        <DmsList />
      </div>
    </GlobalProvider>
  );

  const container = window !==
    undefined ? () => window().document.body : undefined;

  return (
    <GlobalProvider value={{currentWorkspace, setWorkspace, setMobileOpen,
      settingsOpen, setSettingsOpen, userStatus, setUserStatus, userName}}>
      <div className={classes.back}>
        <CssBaseline />
        <AppBar position="Absolute" className={classes.appBar}>
          <Toolbar className='toolbar'>
            <span className={classes.workspaceName}>
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon className={`${classes.menuButtonMed}
              ${classes.menuButtonSm}`} /></IconButton>
              {currentWorkspace}
            </span>
            <IconButton
              color="black"
              className={classes.menuButtonDesktop}
            >
              <MenuListWS />
            </IconButton>
            <div className={classes.search}>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                endAdornment={<SearchIcon />}
              />
            </div>
            <div className={classes.userIconTopCorner}>
              <MenuListProfile />
            </div>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              className={classes.menuButton}
            >
              <MenuListWS />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}
          aria-label="mailbox folders">
          {/* The implementation can be swapped
          * with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
            <LabelBottomNavigation className={classes.bottomNavBarMobile}/>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.hurry}>
          </div>
        </main>
      </div>
    </GlobalProvider>
  );
}
// source: https://material-ui.com/components/drawers/
