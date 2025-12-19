import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Oferta from './pages/Oferta';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Oferta />} />
        </Routes>
    );
}

export default App;
