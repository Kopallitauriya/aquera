import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import PlanetDetail from "./pages/detail_page"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<PlanetDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
