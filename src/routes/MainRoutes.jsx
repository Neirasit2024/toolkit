import React from 'react';
import { Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import Favorite from '../pages/Favorite/favorite';
import Admin from '../pages/Admin/admin';
import { Route } from 'react-router-dom';

const MainRoutes = () => {
    const PAGES = [
        {path: "/home" , element: <Home/> },
        {path: "/favorite" , element: <Favorite/> },
        {path: "/admin" , element: <Admin/> },
    ]
    return (
        <Routes>
            {
                PAGES.map((el, ind)=>(
                    <Route path={el.path} element={el.element} key={ind}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;