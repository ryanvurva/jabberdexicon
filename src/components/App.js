import React, { Component } from 'react'
import Search from './Search'
import Home from './Home'
import Browse from './Browse'
import Output from './Output'
import Letterbar from './Letterbar'
import NewTerm from './NewTerm'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render () {
    return <Router>
      <div className='AppMain'>
        <h1><Link to='/'><i className='fa fa-optin-monster' aria-hidden='true' /> The Jabberdexicon <i className='fa fa-optin-monster' aria-hidden='true' /></Link></h1>
        <div className='letterArea'><Letterbar /></div>
        <div className='display'>
          <Search />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/entry/:slug' component={Output} />
            <Route path='/browse/:letter' component={Browse} />
            <Route path='/new-entry' component={NewTerm} />
          </Switch>
        </div>
      </div>
    </Router>
  }
}

export default App
