import React, { Component } from 'react'
import Search from './Search'
import Home from './Home'
import Browse from './Browse'
import Results from './Results'
import Output from './Output'
import Letterbar from './Letterbar'
import NewTerm from './NewTerm'
import Edit from './Edit'
import NoMatch404 from './NoMatch404'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { get } from '../api'

class App extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('/entries').then((entries) => {
      this.setState({ entries })
    })
  }
  render () {
    return <Router>
      <div className='AppMain'>
        <h1>
          <Link to='/'>
            <i className='fa fa-optin-monster' aria-hidden='true' /> The Jabberdexicon <i className='fa fa-optin-monster' aria-hidden='true' />
          </Link>
        </h1>
        <div className='letterArea'>
          <Letterbar />
        </div>
        <div className='display'>
          <Search entries={this.state.entries} />
          <Switch>
            <Route exact path='/' render={(props) => (
              <Home entries={this.state.entries} {...props} />
          )} />
            <Route path='/browse/:letter' component={Browse} />
            <Route path='results/:query' component={Results} />
            <Route path='/entry/:slug' component={Output} />
            <Route path='/new-entry' component={NewTerm} />
            <Route path='/edit' component={Edit} />
            <Route component={NoMatch404} />
          </Switch>
        </div>
      </div>
    </Router>
  }
}

export default App
