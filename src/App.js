import React from 'react';
import {NavBar,Footer,Features} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
    <Features/>
    <Footer/>
    </Router>
  );
}

export default App;
