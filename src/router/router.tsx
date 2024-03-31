import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../components/home';
import AboutUs from '../components/about-us';
import ContactUs from '../components/contact-us';
import NotFound from '../components/404';

const AppRoutes = () => {
  return (
    <Routes>

        <Route path={"/"} element={<Home/>}/>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/about-us"} element={<AboutUs/>}/>
        <Route path={"/contact-us"} element={<ContactUs/>}/>
        <Route path={"/*"} element={<NotFound/>}/>
      
    </Routes>
  )
}

export default AppRoutes
