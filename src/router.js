import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CreatePoll from './container/create-poll';
import PreviousPolls from './components/previous-polls';
import ShowPollQuestion from './components/show-poll-question';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CreatePoll}/>
            <Route path='/previouspoll' component={PreviousPolls}/>
            <Route path='/show' component={ShowPollQuestion}/>
        </Switch>
  </main>
)

export default Main;