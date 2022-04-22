import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import home from './components/home';
import Edit from './components/edit';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <BrowserRouter>
          <Switch>
            
            <Route path="/" exact component={home} />
            <Route path="/edit/:id" exact component={Edit} />
            

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
