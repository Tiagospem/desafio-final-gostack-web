import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignOut from '../pages/SignOut'
import Dashboard from '../pages/dashboard'
import Profile from '../pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignOut} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashprofileoard" component={Profile} />
    </Switch>
  )
}
