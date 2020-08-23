import React from 'react'
import LessonProvider from './useLessonContext'

const Context = ({ children }) => {
  return <LessonProvider>{children}</LessonProvider>
}
export default Context
