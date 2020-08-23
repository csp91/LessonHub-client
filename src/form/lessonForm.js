import React, { useState } from 'react'
import { TextField, Button, Dialog } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
}))

const LessonForm = () => {
  const [steps, setSteps] = useState([])
  const classes = useStyles()

  const handleAddSteps = () => {
    console.log(steps)
    console.log(steps.map((s) => Object.keys(s)))
    setSteps((prev) => {
      let name = prev.length.toString()
      return [...prev, { [name]: name }]
    })
  }

  return (
    <Dialog>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
        />

        <TextField id="outlined-basic" label="Description" variant="outlined" />
        <Button onClick={handleAddSteps}>test</Button>

        {steps.map((s) => (
          <TextField
            value={s.name}
            id="outlined-basic"
            label={s.name}
            variant="outlined"
            multiline
          />
        ))}
      </form>
    </Dialog>
  )
}

export default LessonForm
