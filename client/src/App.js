import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/Home';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import CreatePost from './Components/CreatePost';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
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
    </BrowserRouter>
    
  );
}

export default App;
