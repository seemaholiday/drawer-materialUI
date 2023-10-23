import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiniDrawer from './component/sidebar';
import Dashboard from './screens/dashboard';
import Contact from './screens/contactus';
import Subscription from './screens/subscription';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      {/* <MiniDrawer/> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
