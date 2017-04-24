import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Term from './Term'
import SearchInput from './SearchInput'
import Browse from './Browse'
import Letterbar from './Letterbar'
import Results from './Results'
import NewTerm from './NewTerm'
import Edit from './Edit'
import NoMatch404 from './NoMatch404'
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
        <header>
          <h1>
            <Link to='/'>
              <i className='fa fa-optin-monster' aria-hidden='true' /> The Jabberdexicon <i className='fa fa-optin-monster' aria-hidden='true' />
            </Link>
          </h1>
        </header>
        <nav>
          <div className='letterArea'>
            <Letterbar />
          </div>
        </nav>
        <div className='display'>
          <SearchInput />
          <Switch>
            <Route exact path='/' render={(props) => (
              <Home entries={this.state.entries} {...props} />
            )} />
            <Route path='/browse/:letter' component={Browse} />
            <Route path='/entry/:slug' component={Term} />
            <Route path='/search/:query' component={Results} />
            <Route path='/new-entry' component={NewTerm} />
            <Route path='/edit/:slug' component={Edit} />
            <Route component={NoMatch404} />
          </Switch>
        </div>
      </div>
    </Router>
  }
}

export default App
