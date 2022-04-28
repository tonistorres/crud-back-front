
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';
import Loading from './components/Loading/Loading.jsx';
import Home from './pages/Home.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Router>
          <Switch>
            <Route  path="/home" component={ Home } />
            <Route  path="/notfound" component={ NotFound } />
            <Route exact path="/" component={ Loading } />
          </Switch>
        </Router>
     </div>  
    )
  }
}
