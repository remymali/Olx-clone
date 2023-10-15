import React from 'react';
import {useEffect,useContext } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from'./Pages/Create'
import { AuthContext } from './Store/Context';
import { FirebaseContext } from './Store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import View from './Components/View/View';

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[])
  return (
    <div>
      <Router>
        <Route  exact path='/' ><Home/></Route>
        <Route path='/signup'><Signup/></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/create'><Create/></Route>
        <Route path='/view'><View/></Route>
      </Router>
      
    </div>
  );
}

export default App;
