import React, { Component } from 'react';
import MainPage from './containers/MainPage/MainPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from '../modules/containers/AddNewUser/AddUser';

class App extends Component {
  
  render() {
    return (
      <div>
           <Router>
              <div>
                <Route exact path="/" component={MainPage}/>
                <Route path="/addUser" component={AddUser}/>
              </div>
          </Router>  
      </div>
    );
  }

}

export default App;

