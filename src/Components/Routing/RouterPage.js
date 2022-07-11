import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import History from "../Pages/History";
import Places from "../Pages/Places";

export default function RouterPage(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path = "/" element = {<Home/>}/> 
                    <Route path = "/Home" element = {<Home/>}/>
                    <Route path = "/History" element = {<History/>}/>
                    <Route path = "/Places" element = {<Places/>}/>
                </Routes>
            </Router>
        </div>
    )
}