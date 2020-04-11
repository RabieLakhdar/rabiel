import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SiteMap from './pages/SiteMap'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sitem" component={SiteMap} />
      </Switch>
    </BrowserRouter>
  )
}
