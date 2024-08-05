import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import NotFound from './Components/NotFound';
import Popular from './Components/Popular';
import Recommendation from './Components/Recommendation';
import SearchAnime from './Components/SearchAnime';
import AnimePage from './Components/AnimePage';


function App() {
  return (
    <Router>
        <div className="app">
        <Routes>
          <Route path="/popular" element={[<Header/>,<Popular/>]} />
          <Route path="/recommendation" element={[<Header/>,<Recommendation/>]} />
          <Route path='/search' element={[<Header/>,<SearchAnime/>]} />
          <Route path='/anime/:id' element={[<Header/>,<AnimePage/>]} />
          <Route path="/" element={[<Header/>,<Body/>]} />
          <Route path="*" element={[<NotFound/>]} />
        </Routes>
        </div>
    </Router>
  );
}



export default App;
