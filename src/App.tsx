import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { useState,useEffect } from 'react';
import Cards from './Components/Cards'
import {Routing} from './Router/Router'


function App() {

 


  return (
    <div className="App">
     <Navbar
      cartvelue={5}
     />
 
     <Routing/>
    </div>
  );
}

export default App;
