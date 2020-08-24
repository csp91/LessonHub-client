import React, { useState, useEffect } from 'react'
import {
    Dialog,
    Paper,
    PaperProps,
    DialogTitle,
    Typography,
    Tabs,
    DialogContent,
    Slide
} from '@material-ui/core'
// import Draggable from 'react-draggable'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import CopyIcon from '@material-ui/icons/FileCopy'
import SendIcon from '@material-ui/icons/Send'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'

// function PaperComponent(props) {
//     return (
//         <Draggable
//             handle="#draggable-dialog-title"
//             cancel={'[class*="MuiDialogContent-root"]'}
//         >
//             <Paper {...props} />
//         </Draggable>
//     )
// }

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ children, open, onClose, title, }) => {

    return (
        <Dialog
            open={open}
            onBackdropClick={() => onClose()}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            TransitionComponent={Transition}
        >
            <DialogTitle>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Typography variant="h6" color="textPrimary">
                        {title}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}

export default Modal
