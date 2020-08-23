import React, { FC, useState, ChangeEvent } from 'react'
import { TextField, MenuItem, FormControlLabel, Switch, Button, InputLabel, FormControl } from '@material-ui/core'
import Modal from './modal'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import axios from 'axios'
import LessonProvider from '../context/useLessonContext'
import { apiWrapper } from '../api/apiWrapper'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {

    },
}))

const AddLesson = ({ closeModal }) => {
    const classes = useStyles()
    const [file, setFile] = useState('')
    const [fileName, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState()

    const fileUpload = (e) => {
        // if (e.target.files[0]) {
        setFile(e.target.files[0] || '')
        setFilename(e.target.files[0]?.name || 'No file attached')
        // } else {
        //     setFile('')
        //     setFilename(e.target.files[0]?.name || 'No file attached')
        // }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    method: 'POST',
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                }
            })

            const { fileName, filePath } = res.data
            setUploadedFile({ fileName, filePath })
        } catch (err) {
            if (err.response.status === 500) {
                console.log('server broke')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }

    return (
        <Modal
            open={true}
            onClose={() => closeModal()}
            title='Add Lesson'
            onSubmit={() => null}
            mode='New'>
            <div style={{ width: '550px', height: '600px' }}>
                <TextField
                    label="Title"
                    type="text"
                    onChange={() => null}
                    name="title"
                    fullWidth
                />
                <TextField
                    label="Description"
                    type="text"
                    onChange={() => null}
                    name="description"
                    fullWidth
                />
                <TextField
                    select
                    label="Grade Level"
                    name="grade"

                    onChange={() => null}
                    fullWidth
                >
                    <MenuItem value='PK'>Pre-K</MenuItem>
                    <MenuItem value='K'>K</MenuItem>
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='2'>2</MenuItem>
                    <MenuItem value='3'>3</MenuItem>
                    <MenuItem value='4'>4</MenuItem>
                    <MenuItem value='5'>5</MenuItem>
                    <MenuItem value='6'>6</MenuItem>
                    <MenuItem value='7'>7</MenuItem>
                    <MenuItem value='8'>8</MenuItem>
                    <MenuItem value='9'>9</MenuItem>
                    <MenuItem value='10'>10</MenuItem>
                    <MenuItem value='11'>11</MenuItem>
                    <MenuItem value='12'>12</MenuItem>

                </TextField>

                <input

                    className={classes.input}
                    // style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={fileUpload}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span" onClick={handleSubmit}>
                        Upload
                    </Button>
                </label>



                {/* <FormControlLabel
                    control={
                        <Switch checked={schedule.useAuthorized} onChange={(e, checked) => setSchedule(prev => { return { ...prev, [e.target.name]: checked } })} />
                    }
                    label="Authorized"
                    name="useAuthorized"
                />
                <FormControl size='small' fullWidth>
                    <InputLabel htmlFor="component-simple" shrink>Pattern</InputLabel>
                </FormControl> */}
                {/* <div style={{ overflow: 'auto', maxHeight: '250px' }}>
                    <table className='pattern-table'> {schedule.patterns &&
                        schedule.patterns.map((p: any) =>
                            <tr key={p.step}>
                                <td style={{ paddingRight: '10px' }}>{PATTERN_DOW(schedule.startDOW, p.step)}</td>
                                <td><select
                                    className='remarks-textarea'
                                    onChange={(e) => handleDayStatus(p.step, e)}
                                    value={p.statusId}
                                >
                                    {allDayStatuses &&
                                        allDayStatuses.map((ds: DayStatus) =>
                                            <option key={ds.id} value={ds.id}>{ds.name}</option>)}
                                </select>

                                </td>
                            </tr>)}
                    </table>
                    <div style={{ paddingTop: '10px' }}>
                        <Button
                            size='small'
                            variant="contained"
                            color="primary"
                            style={{ marginRight: '5px' }}
                            onClick={() => {
                                setSchedule(prev => {
                                    const patternInit = { schedId: prev.id, step: 1, duration: '1 day', statusId: 1 }
                                    return { ...prev, ['patterns']: prev.patterns ? [...prev.patterns, { ...patternInit, step: prev.patterns.length + 1 }] : [patternInit] }
                                })
                            }}>Add</Button>
                        <Button
                            size='small'
                            disabled={!schedule.patterns || schedule.patterns.length == 0}
                            variant="contained" color="secondary"
                            onClick={() => setSchedule(prev => { return { ...prev, patterns: [] } })}>Clear All</Button>
                    </div>
                </div> */}

            </div>
        </Modal >
    )
}

export default AddLesson