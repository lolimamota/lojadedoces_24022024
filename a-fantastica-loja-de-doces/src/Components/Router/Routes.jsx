import React from "react";
import Choco from '../Main/Chocolates/Chocolates.jsx'
import Cake from '../Main/Cake/Cake.jsx'
import Cookie from "../Main/Cookies/Cookie.jsx";
import Icecreams from "../Main/Icecream/Icecreams.jsx";
import Home from "../Main/Home/Home.jsx";
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'

const AppRoute = () =>{
    return(
        <>
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route path="../Main/Home/Home.jsx" element={Home}/>
                    <Route path="../Main/Chocolates/Chocolates.jsx" element={Choco}/>
                    <Route path="../Main/Cake/Cake.jsx" element={Cake}/>
                    <Route path="../Main/Cookies/Cookie.jsx" element={Cookie}/>
                    <Route path="../Main/Icecream/Icecreams.jsx" element={Icecreams}/>
                </Routes>
            </Router>
        </BrowserRouter>
        </>
    )
}
export default AppRoute