import logo from './logo.svg';
import './App.css';

import Form from './Form/Form'
import HomePage from './HomePage/HomePage'
import Pagination from './Pagination/Pagination';
import UserData from './UserData/UserData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainNavigation from './MainNavigation/MainNavigation';



function App() {
  return (
    
    <Router>
         <MainNavigation/>
        <div className="App">          
          <Route path="/form" exact component={Form}/>
          <Route path="/" exact component={HomePage}/>
          <Route path="/userdata" exact component={UserData}/>
          <Route path="/pagination" exact component={Pagination}/>
      </div>
    </Router>

  );
}

export default App;
