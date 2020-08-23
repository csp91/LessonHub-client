import React, { createContext, useState, useContext } from 'react'

const LessonsContext = createContext({ lessons: [], setLessons: () => null })

const LessonProvider = ({ children }) => {
  const [lessons, setLessons] = useState([])

  return (
    <LessonsContext.Provider value={{ lessons, setLessons }}>
      {children}
    </LessonsContext.Provider>
  )
}

export const useLessonsContext = () => useContext(LessonsContext)
export default LessonProvider
