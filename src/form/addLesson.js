import React, { useState, useEffect } from 'react'
import { TextField, MenuItem, FormControlLabel, Switch, Button, InputLabel, FormControl } from '@material-ui/core'
import Modal from './modal'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import axios from 'axios'
import LessonProvider from '../context/useLessonContext'

import { apiWrapper } from '../api/apiWrapper'
import postLesson from '../api/postLesson'
import AuthorForm from './authorForm'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {

    },
}))

const LESSON_INIT = {
    title: '',
    description: '',
    grade: '',
    category: '',
    email: '',
    notes: '',
    first: '',
    phone: '',
    last: '',

}

const AddLesson = ({ closeModal }) => {
    const classes = useStyles()
    const [file, setFile] = useState('')
    const [fileName, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState()
    const [lesson, setLesson] = useState(LESSON_INIT)
    const [authorForm, toggleAuthorForm] = useState(false)
    const [complete, setComplete] = useState(false)
    const [docs, setDocs] = useState([])

    const fileUpload = (e) => {
        // if (e.target.files[0]) {
        setFile(e.target.files[0] || '')
        setFilename(e.target.files[0]?.name || 'No file attached')
        // } else {
        //     setFile('')
        //     setFilename(e.target.files[0]?.name || 'No file attached')
        // }
    }

    const docsUpload = (e) => {
        // if (e.target.files[0]) {
        setDocs(prev => [...prev, ...e.target.files] || [])
        // } else {
        //     setFile('')
        //     setFilename(e.target.files[0]?.name || 'No file attached')
        // }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLesson(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        postLesson(lesson).then(async id => {
            const formData = new FormData()
            formData.append('jsondata', JSON.stringify({ name: 'cover', id: id }))
            formData.append('file', file)
            try {
                const res = await axios.post('http://localhost:8080/upload', formData, {
                    headers: {
                        method: 'POST',
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                    },
                })

                const { fileName, filePath } = res.data
                setUploadedFile({ fileName, filePath })
                return
            } catch (err) {
                if (err.response.status === 500) {
                    console.log('server broke')
                } else {
                    console.log(err.response.data.msg)
                }
            }
            return
        })
        console.log('test')
        closeModal()
    }

    useEffect(() => {
        if (lesson.title && lesson.description && lesson.category && file) {
            setComplete(true)
        } else {
            setComplete(false)
        }
    }, [lesson, file])

    return (
        <Modal
            open={true}
            onClose={() => closeModal()}
            title='Add Lesson'
            // onSubmit={handleSubmit}
            mode='New'>
            <div style={{ width: '550px', height: '600px' }}>
                <TextField
                    label="Title"
                    type="text"
                    value={lesson.title}
                    onChange={handleChange}
                    name="title"
                    fullWidth
                    required
                />
                <TextField
                    label="Description"
                    type="text"
                    value={lesson.description}
                    onChange={handleChange}
                    name="description"
                    fullWidth
                    required



                />
                <TextField
                    select
                    label="Grade Level"
                    name="grade"
                    value={lesson.grade}
                    onChange={handleChange}
                    fullWidth

                >
                    <MenuItem value='PK'>Pre-K</MenuItem>
                    <MenuItem value='K'>Kindergarten</MenuItem>
                    <MenuItem value='1'>Grade 1</MenuItem>
                    <MenuItem value='2'>Grade 2</MenuItem>
                    <MenuItem value='3'>Grade 3</MenuItem>
                    <MenuItem value='4'>Grade 4</MenuItem>
                    <MenuItem value='5'>Grade 5</MenuItem>
                    <MenuItem value='6'>Grade 6</MenuItem>
                    <MenuItem value='7'>Grade 7</MenuItem>
                    <MenuItem value='8'>Grade 8</MenuItem>
                    <MenuItem value='9'>Grade 9</MenuItem>
                    <MenuItem value='10'>Grade 10</MenuItem>
                    <MenuItem value='11'>Grade 11</MenuItem>
                    <MenuItem value='12'>Grade 12</MenuItem>


                </TextField>

                <TextField
                    select
                    label="Category"
                    name="category"
                    value={lesson.category}
                    onChange={handleChange}
                    fullWidth
                    required

                >

                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='History'>History</MenuItem>
                    <MenuItem value='Math'>Math</MenuItem>
                    <MenuItem value='Technology'>Technology</MenuItem>
                    <MenuItem value='Fitness'>Fitness</MenuItem>
                    <MenuItem value='Science'>Science</MenuItem>
                    <MenuItem value='FL'>Foreign Language</MenuItem>
                    <MenuItem value='SS'>Social Science</MenuItem>


                </TextField>

                <TextField
                    label="Notes"
                    variant="outlined"
                    type="text"
                    value={lesson.notes}
                    onChange={handleChange}
                    name="notes"
                    fullWidth
                    rows={10}
                    multiline
                    style={{
                        marginTop: '30px', height: '200px', marginBottom: '50px'
                    }}
                />
                <div style={{ display: 'flex' }}><Button
                    variant="contained"
                    component="label"
                    color={file && 'primary'}
                    style={{ marginRight: '10px' }}
                >   <input
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        accept="image/*"
                        onChange={fileUpload}
                    />
                    Cover Page
                </Button>{file && <div style={{ alignSelf: 'center' }}>{file.name}</div>}</div>



                <div style={{ display: 'flex', marginTop: '20px' }}><Button
                    variant="contained"
                    component="label"
                    color={docs.length > 0 ? 'primary' : ''}
                    style={{ marginRight: '10px' }}
                >   <input
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={docsUpload}
                    />
                    Add a document
                </Button></div>
                {docs.length > 0 && docs.map(f => <div style={{ alignSelf: 'center' }}>{f.name}</div>)}




            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '190px', float: 'right' }}>
                <Button size='small' onClick={() => closeModal()}>Cancel</Button>
                <Button size='small' onClick={() => toggleAuthorForm(true)} disabled={!complete}>Next</Button>
            </div>

            {authorForm && <AuthorForm closeModal={() => closeModal()} lesson={lesson} handleChange={e => handleChange(e)} handleSubmit={(e) => handleSubmit(e)} />}
        </Modal >
    )
}

export default AddLesson