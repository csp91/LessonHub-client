import React, { FC, useState, ChangeEvent } from 'react'
import { TextField, MenuItem, FormControlLabel, Switch, Button, InputLabel, FormControl } from '@material-ui/core'
import Modal from './modal'
import { fade, makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {

    },
}))

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />)

const AuthorForm = ({ closeModal, handleChange, handleSubmit, lesson }) => {
    const classes = useStyles()
    const [firsTime, toggleRegister] = useState(false)


    return (
        <Modal
            open={true}
            onClose={() => closeModal()}
            title='Add Lesson'
            mode='New'>
            <div style={{ width: '550px', height: '600px' }}>
                {firsTime &&
                    <>
                        <TextField
                            label="First Name"
                            type="text"
                            value={lesson.first}
                            onChange={handleChange}
                            name="first"
                            fullWidth
                        />
                        <TextField
                            label="Last Name"
                            type="text"
                            value={lesson.last}
                            onChange={handleChange}
                            name="last"
                            fullWidth
                        />
                        <TextField
                            type="tel"
                            label="Phone"
                            name="phone"
                            value={lesson.phone}
                            onChange={handleChange}
                            fullWidth
                        />
                    </>
                }

                <TextField
                    type="email"
                    label="E-mail"
                    name="email"
                    value={lesson.email}
                    onChange={handleChange}
                    fullWidth
                />

                <FormControlLabel
                    control={<GreenCheckbox checked={firsTime} name="checkedG" />}
                    label="First time posting?"
                    onClick={() => toggleRegister(!firsTime)}
                />

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '190px', float: 'right' }}>
                <Button size='small' onClick={() => closeModal()}>Cancel</Button>
                <Button size='small' onClick={handleSubmit}>Submit</Button>
            </div>

            {}
        </Modal >
    )
}

export default AuthorForm