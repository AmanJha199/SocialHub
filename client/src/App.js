import React,{useEffect,createContext,useReducer,useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route, useHistory, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import CreatePost from './Components/CreatePost';
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext();

const Routing = () =>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    //if user is present
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      //if user is not there
      history.push('/signin')
    }
  },[])
  return(
    <Switch>
        <Route exact path ='/'>
          <Home/>
        </Route>
        <Route path ='/signin'>
          <Signin/>
        </Route>
        <Route path ='/signup'>
          <Signup/>
        </Route>
        <Route path ='/profile'>
          <Profile/>
        </Route>
        <Route path ='/create'>
          <CreatePost/>
        </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar/>
        <Routing/>
      </BrowserRouter>
    </UserContext.Provider>

    
  );
}

export default App;
