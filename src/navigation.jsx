import React from 'react'
import history from 'config/history'
import { Router, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
         <Route component={Home} />
      </Switch>
    </Router>
  )
}
