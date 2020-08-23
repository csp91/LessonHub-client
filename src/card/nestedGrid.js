// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import LessonCard from './lessonCard'
// // import FormRow from './formRow'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// })

// const testArray = [
//   { title: 'testtitl1', description: 'testdescription' },
//   { title: 'testtitl2', description: 'testdescription' },
//   { title: 'testtitl3', description: 'testdescription' },
//   { title: 'testtitl4', description: 'testdescription' },
//   { title: 'testtitl5', description: 'testdescription' },
//   { title: 'testtitl6', description: 'testdescription' },
//   { title: 'testtitl7', description: 'testdescription' },
//   { title: 'testtitl8', description: 'testdescription' },
//   { title: 'testtitl9', description: 'testdescription' },
//   { title: 'testtitl10', description: 'testdescription' },
//   // { title: 'testtitl1', description: 'testdescription' },
//   // { title: 'testtitl2', description: 'testdescription' },
//   // { title: 'testtitl3', description: 'testdescription' },
//   // { title: 'testtitl4', description: 'testdescription' },
//   // { title: 'testtitl5', description: 'testdescription' },
//   // { title: 'testtitl6', description: 'testdescription' },
//   // { title: 'testtitl7', description: 'testdescription' },
//   // { title: 'testtitl8', description: 'testdescription' },
//   // { title: 'testtitl9', description: 'testdescription' },
//   // { title: 'testtitl10', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
//   // { title: 'testtitle', description: 'testdescription' },
// ]

// const NestedGrid = () => {

//   const FormRow = () => {
//     return (
//       <React.Fragment>
//         <Grid item xs={4} style={{ marginTop: '10px' }}></Grid>
//         <Grid item xs={4} style={{ marginTop: '10px' }}></Grid>
//         <Grid item xs={4} style={{ marginTop: '10px' }}></Grid>
//         <Grid item xs={4} style={{ marginTop: '10px' }}></Grid>
//       </React.Fragment>
//     )
//   }

//   // const FormRow = () => {
//   //   const classes = useStyles()
//   //   return (
//   //     <React.Fragment>
//   //       {testArray.forEach((l, i) => {
//   //         let startIndex = 0
//   //         if (((i + 1) % 3 == 0 && i != 0) || i + 1 == testArray.length) {
//   //           console.log(i, 'ran')
//   //           let temp = startIndex
//   //           startIndex = i + 1
//   //           console.log((temp, temp + 3))
//   //           return (
//   //             <Grid container item xs={12} spacing={3}>
//   //               {testArray.slice(temp, temp + 3).map((l) => (
//   //                 <Grid item xs={4} style={{ marginTop: '10px' }}>
//   //                   <LessonCard title={l.title} description={l.description} />
//   //                 </Grid>
//   //               ))}
//   //             </Grid>
//   //           )
//   //         }
//   //       })}
//   //     </React.Fragment>
//   //   )
//   // }

//   return (
//     <div className={classes.root}>

//         {/* <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid> */}
//         <FormRow />
//       </Grid>
//     </div>
//   )
// }

// export default NestedGrid

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'block',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function NestedGrid() {
  const classes = useStyles()

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  )
}
