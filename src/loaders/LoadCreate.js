import React, { lazy, Suspense } from 'react'
import { Loading } from './Loading'

const LoadCreateComp = lazy(() => import('../form/lessonForm'))

const LoadCreate = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <LoadCreateComp {...props} />
    </Suspense>
  )
}

export default LoadCreate
