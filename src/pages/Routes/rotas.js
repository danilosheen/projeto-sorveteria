import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../Home/home";
import Sabores from "../Sabores/sabores";
import Sobre from "../Sobre/sobre";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/sabores" element={<Sabores/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    </BrowserRouter>

);

export default Rotas;