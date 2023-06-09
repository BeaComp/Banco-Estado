import React from "react";
import { NavLink } from 'react-router-dom';

import Home from "../Pages/Home";
import TelaMovimentos from "../Pages/TelaMovimentos";
import TelaResumo from "../Pages/TelaResumo";
import EntradaCliente from "../Pages/EntradaCliente";

const Slidebar = () => {
    return (
        <>
            <NavLink to='/'><Home /></NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </>
    );
};

export default Slidebar;