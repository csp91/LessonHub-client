import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import LoadHome from './loaders/LoadHome'
import LoadCreate from './loaders/LoadCreate'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <LoadHome />} />
          <Route exact path="/create" render={() => <LoadCreate />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
