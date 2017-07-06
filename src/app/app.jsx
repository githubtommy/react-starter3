import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../scenes/home/home.jsx'
import About from '../scenes/about/about.jsx'
import Bio from '../scenes/bio/bio.jsx'
import Lab from '../scenes/lab/lab.jsx'
import WeKnow from '../scenes/weknow/WeKnowContainer.jsx'

const App = () => (
  <div className="container">
    <header>
			<br />
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/bio">Bio</Link> | <Link to="/lab">Lab</Link> | <Link to="/weknow">Things We Think We Know</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/lab" component={Lab} />
      <Route exact path="/weknow" component={WeKnow} />
    </main>
  </div>
)

export default App
