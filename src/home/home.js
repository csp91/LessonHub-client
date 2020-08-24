import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Drawer,
  Divider,
  Button,
  Switch,
  FormControlLabel,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ChevronLeft,
  ChevronRight,
  LibraryAdd,
} from '@material-ui/icons'
import LessonCard from '../card/lessonCard'
import NestedGrid from '../card/nestedGrid'
import getLessons from '../api/getLessons'
import searchLesson from '../api/searchLesson'
import getLessonsByCat from '../api/getLessonsByCat'
import { useLessonsContext } from '../context/useLessonContext'
import FormRow from '../card/formRow'
import AddLesson from '../form/addLesson'

const img = require('../res/logoHeader.png')
const logoWhite = require('../res/logoHeaderWhite.png')
const drawerWidth = 240

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#656e8e',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    minHeight: 110,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  headerTitle: {
    display: 'flex',
    width: 'fit-content',
    marginRight: '20px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))
const level = [
  { name: 'Pre-K', value: 'PK' },
  { name: 'Kindergarten', value: 'K' },
  { name: 'Grade 1', value: 1 },
  { name: 'Grade 2', value: 2 },
  { name: 'Grade 3', value: 3 },
  { name: 'Grade 4', value: 4 },
  { name: 'Grade 5', value: 5 },
  { name: 'Grade 6', value: 6 },
  { name: 'Grade 7', value: 7 },
  { name: 'Grade 8', value: 8 },
  { name: 'Grade 9', value: 9 },
  { name: 'Grade 10', value: 10 },
  { name: 'Grade 11', value: 11 },
  { name: 'Grade 12', value: 12 },
]

const category = [
  { name: 'English', value: 'English' },
  { name: 'Math', value: 'Math' },
  { name: 'History', value: 'History' },
  { name: 'Science', value: 'Science' },
  { name: 'Technology', value: 'Technology' },
  { name: 'Foreign Languages', value: 'FL' },
  { name: 'Social Studies', value: 'SS' },
  { name: 'Fitness', value: 'Fitness' },
  // { name: 'Grade 4', value: 4 },
  // { name: 'Grade 5', value: 5 },
  // { name: 'Grade 6', value: 6 },
  // { name: 'Grade 7', value: 7 },
  // { name: 'Grade 8', value: 8 },
  // { name: 'Grade 9', value: 9 },
  // { name: 'Grade 10', value: 10 },
  // { name: 'Grade 11', value: 11 },
  // { name: 'Grade 12', value: 12 },
]

const Home = () => {
  const theme = useTheme()
  const classes = useStyles()
  const { setLessons } = useLessonsContext()
  const [open, toggleDrawer] = useState(false)
  const [addForm, toggleAddForm] = useState(false)
  const [catView, toggleCatView] = useState(false)

  const handleLevelClick = (level) => {
    getLessons(level).then((r) => setLessons(r))
    toggleDrawer(false)
  }

  const handleCatClick = (cat) => {
    getLessonsByCat(cat).then((r) => setLessons(r))
    toggleDrawer(false)
  }

  const handleSearch = (e) => {
    let { value } = e.target
    value && value.length > 0 && searchLesson(e.target.value).then((r) => setLessons(r))
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(!open)}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => toggleAddForm(!addForm)} className={clsx(classes.menuButton, open && classes.hide)}>
            <div className={classes.headerTitle}>
              {/* <Typography variant="h6" noWrap> */}
              <img style={{ height: '90px' }} src={logoWhite} />
              {/* <LibraryAdd fontSize="small" /> */}
              {/* </Typography> */}
            </div>
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onBlur={handleSearch}
            />
          </div>
          <div className={classes.grow} />
          <div />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={classes.drawerHeader}>
          <div><img style={{ height: '100px' }} src={img} /></div>
          <IconButton onClick={() => toggleDrawer(false)}>



            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}

          </IconButton>
        </div>
        <Divider />
        <div style={{ marginBottom: '20px', alignSelf: 'center' }}>
          <FormControlLabel
            control={<IOSSwitch checked={catView} name="checkedB" />}
            label="Sory by category"
            onClick={() => toggleCatView(!catView)}
          />
        </div>


        {!catView && level.map((l) => (
          <Button key={l.name} onClick={() => handleLevelClick(l.value)}>
            {l.name}
          </Button>
        ))}

        {catView && category.map(c => (
          <Button key={c.name} onClick={() => handleCatClick(c.value)}>
            {c.name}
          </Button>))}


      </Drawer>
      <FormRow />

      {addForm &&
        <AddLesson
          closeModal={() => toggleAddForm(false)}
        />}

    </div>
  )
}

export default Home
