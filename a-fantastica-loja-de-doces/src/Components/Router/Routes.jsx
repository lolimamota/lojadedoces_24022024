import React from "react";
import Choco from '../Main/Chocolates/Chocolates.jsx'
import Cake from '../Main/Cake/Cake.jsx'
import Cookie from "../Main/Cookies/Cookie.jsx";
import Icecreams from "../Main/Icecream/Icecreams.jsx";
import Home from "../Main/Home/Home.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const AppRoutes = () =>{
    return(
        <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/choco" element={<Choco/>}/>
                    <Route path="/cake" element={<Cake/>}/>
                    <Route path="/cookie" element={<Cookie/>}/>
                    <Route path="/icecreams" element={<Icecreams/>}/>
                </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRoutes;