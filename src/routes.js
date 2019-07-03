import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Candidates from './Components/Candidates/Candidates'
import Clients from './Components/Clients/Clients'
import Contacts from './Components/Contacts/Contacts'
import Files from './Components/Files/Files'
import Projects from './Components/Projects/Projects'
import Reports from './Components/Reports/Reports'
import Schedule from './Components/Schedule/Schedule'
import Search from './Components/Search/Search'

export default (
    <Switch>
        <Route path='/candidates' component={Candidates}/>
        <Route path='/clients' component={Clients}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/files' component={Files}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/search' component={Search}/>
    </Switch>
)