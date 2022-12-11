import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/">
              <SignUp/>
            </Route>
            <Route path="/Login">
              <Login/>
            </Route>
          </Switch>
        </div>

      </div>
    </Router>

  );
}

export default App;
