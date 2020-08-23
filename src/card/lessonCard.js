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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  content: {
    minHeight: 145,
    maxHeight: 145,
  },
})

const LessonCard = ({ title, description, id }) => {
  const classes = useStyles()
  const [rating, setRating] = useState(3)
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems(id).then(setItems)
    console.log(items)
  }, [])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"

          title="Contemplative Reptile"

        > */}
        <div style={{ width: '275px', height: '186px', overflow: 'hidden' }}>{items.length > 0 && <img alt={title} src={`data:image/*;base64,${items[0].files.toString('base64')}`} />}</div>
        {/* </CardMedia> */}

        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
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
    </Card>
  )
}

export default LessonCard
