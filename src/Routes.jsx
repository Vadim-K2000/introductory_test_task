import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import { CardBlock, Form } from './components';

const Routers = () => {
    return ( 
    <Routes>
        <Route path="/" element={<CardBlock/>}/>
        <Route path="/form" element={<Form/>}/>
    </Routes>);
};

export default Routers;