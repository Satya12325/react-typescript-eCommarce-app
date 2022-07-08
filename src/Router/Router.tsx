import {Routes,Link,Route} from "react-router-dom";
import React from 'react'
import Home from '../Pages/Home'

export const Routing = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}