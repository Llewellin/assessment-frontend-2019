import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline, Container } from '@material-ui/core'

import CreateIncident from './pages/CreateIncident/CreateIncident.jsx'
import Home from './pages/Home'
import { Header } from './components/Header'
import './styles/App.css'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <div className="App">
            <Header />
            <div className="IncidentList">
              <Route exact path="/" component={Home} />
              <Route path="/create" component={CreateIncident} />
            </div>
          </div>
        </Router>
      </Container>
    </React.Fragment>
  )
}

export default App
