import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import NotFound from './Components/NotFound';
import Popular from './Components/Popular';



function App() {
  return (
    <Router>
        <div className="app">
        <Routes>
          <Route path="/popular" element={[<Header/>,<Popular/>]} />
          <Route path="/" element={[<Header/>,<Body/>]} />
          <Route path="*" element={[<NotFound/>]} />
        </Routes>
        </div>
    </Router>
  );
}






export default App;
