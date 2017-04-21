import React, { Component } from 'react'
import Search from './Search'
import Home from './Home'
import Browse from './Browse'
import Results from './Results'
import Output from './Output'
import Letterbar from './Letterbar'
import NewTerm from './NewTerm'
import NoMatch404 from './NoMatch404'
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
            <Route path='/browse/:letter' component={Browse} />
            <Route path='results/:word' component={Results} />
            <Route path='/entry/:slug' component={Output} />
            <Route path='/new-entry' component={NewTerm} />
            <Route component={NoMatch404} />
          </Switch>
        </div>
      </div>
    </Router>
  }
}

export default App
