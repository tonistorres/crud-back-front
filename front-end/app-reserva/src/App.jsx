
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';
import Loading from './components/Loading/Loading.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import CreateAccoutn from './pages/CreateAccount.jsx';

function App() {
  return ( 
    <div>
        <Router>
          <Switch>
            <Route  path="/home" component={ Home } />
            <Route  path="/login" component={ Login } />
            <Route  path="/createaccount" component={ CreateAccoutn } />
            <Route  path="/notfound" component={ NotFound } />
            <Route exact path="/" component={ Loading } />
          </Switch>
        </Router>
     </div>  
   );
}

export default App;


