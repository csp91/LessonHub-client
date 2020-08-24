import React, { FC, useState, ChangeEvent } from 'react'
import { TextField, MenuItem, FormControlLabel, Switch, Button, InputLabel, FormControl, Typography } from '@material-ui/core'
import Modal from './modal'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'

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
    grade: 'PK',
    email: 'john.doe@yahoo.com',
}

const ViewLesson = ({ closeModal, lesson }) => {
    const classes = useStyles()
    const [file, setFile] = useState('')
    const [fileName, setFilename] = useState('Choose File')

    // const fileUpload = (e) => {
    //     // if (e.target.files[0]) {
    //     setFile(e.target.files[0] || '')
    //     setFilename(e.target.files[0]?.name || 'No file attached')
    //     // } else {
    //     //     setFile('')
    //     //     setFilename(e.target.files[0]?.name || 'No file attached')
    //     // }
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setLesson(prev => {
    //         return { ...prev, [name]: value }
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     await postLesson(lesson).then(async id => {
    //         const formData = new FormData()
    //         formData.append('jsondata', JSON.stringify({ name: 'cover', id: id }))
    //         formData.append('file', file)
    //         try {
    //             const res = await axios.post('http://localhost:8080/upload', formData, {
    //                 headers: {
    //                     method: 'POST',
    //                     'Content-Type': 'multipart/form-data',
    //                     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //                 },
    //             })

    //             const { fileName, filePath } = res.data
    //             setUploadedFile({ fileName, filePath })
    //             return
    //         } catch (err) {
    //             if (err.response.status === 500) {
    //                 console.log('server broke')
    //             } else {
    //                 console.log(err.response.data.msg)
    //             }
    //         }
    //     })



    //     closeModal()
    // }

    return (
        <Modal
            open={true}
            onClose={() => closeModal()}
            title={lesson.title}
        >
            <div style={{ width: '550px', height: '600px', overflow: 'auto' }}>
                <Typography gutterBottom variant="h6" component="h2">
                    {lesson.description}
                </Typography>
                <div style={{ height: '200px' }}>{lesson.notes}</div>


            </div>
            <Typography gutterBottom component="h6">
                <div style={{ display: 'flex' }}>Author: {lesson.first} {lesson.last}</div>
                <div style={{ display: 'flex' }}>Need a tutor? Ask for help
                <a style={{ marginLeft: '4px' }} href={`mailto:${lesson.email}`}>{lesson.email}</a>
                    <span style={{ marginLeft: '4px' }}>{lesson.phone}</span>
                </div>
            </Typography>
        </Modal >
    )
}

export default ViewLesson