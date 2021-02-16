import logo from './logo.svg';
import './App.css';

import Form from './Form/Form'
import HomePage from './HomePage/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="App">          
          <Route path="/form" exact component={Form}/>
          <Route path="/" exact component={HomePage}/>

      </div>
    </Router>

  );
}

export default App;
