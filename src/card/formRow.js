import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LessonCard from './lessonCard'
import { useLessonsContext } from '../context/useLessonContext'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '100px',
  },
})

const testArray = [
  { title: 'testtitl1', description: 'testdescription' },
  { title: 'testtitl2', description: 'testdescription' },
  { title: 'testtitl3', description: 'testdescription' },
  {
    title: 'testtitl4',
    description: `tesffffffffffffffffffffff 
  ffffff ffffffffff fffffffffffffffffffff fffffffffffffffffffff fffffftdescription`,
  },
  { title: 'testtitl5', description: 'testdescription' },
  { title: 'testtitl6', description: 'testdescription' },
  { title: 'testtitl7', description: 'testdescription' },
  { title: 'testtitl8', description: 'testdescription' },
  { title: 'testtitl9', description: 'testdescription' },
  { title: 'testtitl10', description: 'testdescription' },
  { title: 'testtitl1', description: 'testdescription' },
  { title: 'testtitl2', description: 'testdescription' },
  { title: 'testtitl3', description: 'testdescription' },
  { title: 'testtitl4', description: 'testdescription' },
  { title: 'testtitl5', description: 'testdescription' },
  { title: 'testtitl6', description: 'testdescription' },
  { title: 'testtitl7', description: 'testdescription' },
  { title: 'testtitl8', description: 'testdescription' },
  { title: 'testtitl9', description: 'testdescription' },
  { title: 'testtitl10', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
  { title: 'testtitle', description: 'testdescription' },
]
let startIndex = 0

// const FormRow = () => {
//     const classes = useStyles()
//     return (
//       <div className={classes.root}>
//         <Grid container spacing={1}>
//           {testArray.map((l, i) => {
//             if ((i + 1) % 3 == 0 || i == 0 || i + 1 == testArray.length) {
//               let temp = startIndex
//               startIndex = i != 0 && i + 1
//               console.log(temp, temp + 3, i)
//               return (
//                 <Grid container item xs={12} spacing={3}>
//                   <React.Fragment>
//                     {testArray.slice(temp, temp + 3).map((l) => (
//                       <Grid item xs={4} style={{ marginTop: '10px' }}>
//                         <LessonCard title={l.title} description={l.description} />
//                       </Grid>
//                     ))}
//                   </React.Fragment>
//                 </Grid>
//               )
//             }
//           })}
//         </Grid>
//       </div>
//     )
//   }

const FormRow = () => {
  const classes = useStyles()
  const { lessons } = useLessonsContext()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {lessons.map((l, i) => {
          if ((i + 1) % 3 == 0 || i == 0 || i + 1 == lessons.length) {
            let temp = startIndex
            startIndex = i != 0 && i + 1
            return (
              <Grid container item xs={12} spacing={3}>
                <React.Fragment>
                  {lessons.slice(temp, temp + 3).map((l) => (
                    <Grid item xs={4} style={{ marginTop: '10px' }}>
                      <LessonCard
                        key={l.id}
                        title={l.title}
                        id={l.id}
                        description={l.description}
                      />
                    </Grid>
                  ))}
                </React.Fragment>
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  )
}

export default FormRow

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import LessonCard from './lessonCard'
// import { useLessonsContext } from '../context/useLessonContext'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     marginTop: '100px',
//   },
// })

// const testArray = [
//   { title: 'testtitl1', description: 'testdescription' },
//   { title: 'testtitl2', description: 'testdescription' },
//   { title: 'testtitl3', description: 'testdescription' },
//   { title: 'testtitl4', description: 'testdescription' },
//   //   { title: 'testtitl5', description: 'testdescription' },
//   //   { title: 'testtitl6', description: 'testdescription' },
//   //   { title: 'testtitl7', description: 'testdescription' },
//   //   { title: 'testtitl8', description: 'testdescription' },
//   //   { title: 'testtitl9', description: 'testdescription' },
//   //   { title: 'testtitl10', description: 'testdescription' },
//   //   { title: 'testtitl1', description: 'testdescription' },
//   //   { title: 'testtitl2', description: 'testdescription' },
//   //   { title: 'testtitl3', description: 'testdescription' },
//   //   { title: 'testtitl4', description: 'testdescription' },
//   //   { title: 'testtitl5', description: 'testdescription' },
//   //   { title: 'testtitl6', description: 'testdescription' },
//   //   { title: 'testtitl7', description: 'testdescription' },
//   //   { title: 'testtitl8', description: 'testdescription' },
//   //   { title: 'testtitl9', description: 'testdescription' },
//   //   { title: 'testtitl10', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
//   //   { title: 'testtitle', description: 'testdescription' },
// ]
// let startIndex = 0

// const FormRow = () => {
//   const classes = useStyles()
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={1}>
//         {testArray.map((l, i) => {
//           if (((i + 1) % 3 == 0 && i != 0) || i + 1 == testArray.length) {
//             let tempStart = startIndex
//             // let lastIndex =
//             //   i + 1 == testArray.length ? testArray.length : tempStart + 3
//             startIndex = i + 1
//             testArray.slice(tempStart, tempStart + 3).map((i) => console.log(i))
//             return (
//               <Grid container item xs={12} spacing={3}>
//                 <React.Fragment>
//                   {testArray.slice(tempStart, tempStart + 3).map((l) => (
//                     <Grid item xs={4} style={{ marginTop: '10px' }}>
//                       <LessonCard title={l.title} description={l.description} />
//                     </Grid>
//                   ))}
//                 </React.Fragment>
//               </Grid>
//             )
//           }
//         })}
//       </Grid>
//     </div>
//   )
// }

// export default FormRow
