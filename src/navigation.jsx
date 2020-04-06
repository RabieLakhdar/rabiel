import React from 'react'
import history from './history'
import { Router, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'

const NoMatchPage = () => <h3>404 - Not found</h3>

export default () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
         <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}
