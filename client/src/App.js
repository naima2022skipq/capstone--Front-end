import React  from 'react';
import {Container} from '@material-ui/core';
import Navbar from './components/NavBar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import { BrowserRouter , Route, Routes } from 'react-router-dom';


const App =()=>{
  
  
  return (
    <BrowserRouter>
    <Container maxidth='lg' >
     <Navbar/>
     <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/auth' exact Component={Auth}/>
     </Routes>
    </Container>
    </BrowserRouter>
  )
}
export default App;