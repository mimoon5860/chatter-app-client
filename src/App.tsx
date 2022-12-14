import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DefaultConvo from './components/HomeComponents/DefaultConvo';
import AllMsgOfConvo from './components/HomeComponents/AllMsgOfConvo';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<DefaultConvo />} />
          <Route path='conversation/:convo_id' element={<AllMsgOfConvo />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
