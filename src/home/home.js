import React, { useState } from 'react'

import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
// import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Drawer,
  Divider,
  Button,
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
import { useLessonsContext } from '../context/useLessonContext'
import FormRow from '../card/formRow'
import AddLesson from '../form/addLesson'

const drawerWidth = 240

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

const Home = () => {
  const theme = useTheme()
  const classes = useStyles()
  const { setLessons } = useLessonsContext()
  const [open, toggleDrawer] = useState(false)
  const [addForm, toggleAddForm] = useState(false)

  const handleLevelClick = (level) => {
    getLessons(level).then((r) => setLessons(r))
    toggleDrawer(false)
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
          <IconButton color="inherit" onClick={() => toggleAddForm(!addForm)}>
            <div className={classes.headerTitle}>
              <Typography variant="h6" noWrap>
                Lesson Hub
                <LibraryAdd fontSize="small" />
              </Typography>
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
          <IconButton onClick={() => toggleDrawer(false)}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        {level.map((l) => (
          <Button key={l.name} onClick={() => handleLevelClick(l.value)}>
            {l.name}
          </Button>
        ))}
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
