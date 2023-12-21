// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Councelor from './components/Councelor';
import Visitor from './components/Visitor';
import Appoinment from './components/Appoinment'
import  Home from './components/Home';






function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Signup' element={<Signup />} exact />
          <Route path='/signin' element={<SignIn />} exact />
          <Route path='/AddCounselor' element={<Councelor />} exact />
          <Route path='/Addvisitor' element={<Visitor />} exact />
          <Route path='/Appointment' element={<Appoinment />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
