import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Chat from "./containers/Chat/Chat";
import BurgerShop from "./containers/BurgerShop/BurgerShop";

function App() {
  return (
    <div className='container rounded p-0 shadow-lg'>
      <header>
        <NavBar/>
      </header>
      <main className='overflow-auto bg-light bg-gradient p-4'>
        <Routes>
          <Route path='/' element={(
            <Home/>
          )}/>
          <Route path='/about-us' element={(
            <AboutUs/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
          )}/>
          <Route path='/portfolio/chat' element={(
            <Chat/>
          )}/>
          <Route path='/portfolio/burger' element={(
            <BurgerShop/>
          )}/>
          <Route path='*' element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
