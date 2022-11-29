import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Containers/Home/Home";
import AboutUs from "./Containers/AboutUs/AboutUs";
import Contacts from "./Containers/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Chat from "./Containers/Chat/Chat";
import BurgerShop from "./Containers/BurgerShop/BurgerShop";
import Portfolio from "./Containers/Portfolio/Portfolio";

function App() {
  return (
    <div className='container rounded p-0 shadow-lg' >
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
          <Route path='/portfolio' element={(
            <Portfolio/>
          )}>
            <Route path='chat' element={(
              <Chat/>
            )}/>
            <Route path='burger' element={(
              <BurgerShop/>
            )}/>
          </Route>
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
