
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Loading from './components/Loading/Loading';

export default class App extends React.Component {

  render() {
    return (
     <div>
        <Router>
          <Switch>
          <Route exact path="/" component={ Loading } />
           <Route exact path="/notfound" component={ NotFound } />
          </Switch>
        </Router>
     </div>
    
    
    )
  }
}
