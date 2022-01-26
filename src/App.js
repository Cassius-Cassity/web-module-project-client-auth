import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './Components/Login';
import FriendList from './Components/FriendsList';
import AddFriends from './Components/AddFriends';
import Logout from './Components/LogOut'

import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
        <div className="App">
          <header>
            <h2>Friends Database</h2>
            <Link className='link' to='login'>Login</Link>
            <Link className='link' to='friends'>Friends List</Link>
            <Link className='link' to='friends/add'>Add Friends</Link>
            <Link className='link' to='logout'>Logout</Link>
          </header>
          <Route exact path='/'>
            <Login/>
          </Route>

          <Route exact path='/login'>
            <Redirect to='/'/>
          </Route>

          <Route exact path='/friends'>
            <FriendList/>
          </Route>

          <PrivateRoute exact path='friends' component={FriendList} />
        

          <Route exact path="/friends/add">
            <AddFriends/>
          </Route>

          <Route exact path="/logout">
            <Logout/>
          </Route>
        </div>
    </Router>
  );
}

export default App;
