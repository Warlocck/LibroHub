// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componentes/header';
import Home from './Paginas/Home';
import Carrito from './Paginas/Carrito';
import Login from './Paginas/Login';
import LibroDetalles from './Paginas/LibroDetalles';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/libro/:id" element={<LibroDetalles />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
