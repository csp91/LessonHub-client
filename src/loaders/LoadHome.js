import React, { lazy, Suspense } from 'react'
import { Loading } from './Loading'

const LoadHomeComp = lazy(() => import('../home/home'))

const LoadHome = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <LoadHomeComp {...props} />
    </Suspense>
  )
}

export default LoadHome
