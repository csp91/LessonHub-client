import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import getItems from '../api/getItems'
import ViewLesson from '../form/viewLesson'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  content: {
    minHeight: 145,
    maxHeight: 145,
  },
})

const LessonCard = ({ lesson }) => {
  const classes = useStyles()
  const [rating, setRating] = useState(3)
  const [items, setItems] = useState([])
  const [view, toggleView] = useState(false)

  useEffect(() => {
    getItems(lesson.id).then(setItems)
  }, [])

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => toggleView(!view)}>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"

          title="Contemplative Reptile"

        > */}
        <div style={{ width: '275px', height: '186px', overflow: 'hidden' }}>{items.length > 0 && <img style={{ width: '100%', objectFit: 'contain' }} alt={lesson.title} src={`data:image/*;base64,${items[0].files.toString('base64')}`} />}</div>
        {/* </CardMedia> */}

        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {lesson.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {lesson.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </div>
          <div>
            <Rating name="read-only" defaultValue={rating} readOnly />
          </div>
        </div>
      </CardActions>

      {view && <ViewLesson lesson={lesson} closeModal={() => toggleView(false)} ></ViewLesson>}
    </Card>
  )
}

export default LessonCard
