import React, { useState } from 'react'
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  content: {
    minHeight: 145,
    maxHeight: 145,
  },
})

const LessonCard = ({ title, description }) => {
  const classes = useStyles()
  const [rating, setRating] = useState(3)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={require('../res/pepe.jpg')}
          title="Contemplative Reptile"
        />
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
