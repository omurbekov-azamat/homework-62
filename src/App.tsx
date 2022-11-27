import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {GotUniversity} from "./types";

const mainUrl = 'http://universities.hipolabs.com/search?country=';

function App() {
  const [universities, setUniversities] = useState<GotUniversity[]>([]);

  const fetchData = useCallback(async (url: string) => {
    const universitiesResponse = await axios.get<GotUniversity[]>(url);
    if (universitiesResponse.data.length !== 0) {
      setUniversities(universitiesResponse.data);
    } else {
      alert('Please try another country!');
    }
  }, []);

  useEffect(() => {
    fetchData(mainUrl + 'United+States').catch(console.error);
  }, [fetchData]);

  const findUniversitiesFromCountry = (newCountry: string) => {
    fetchData(mainUrl + newCountry).catch(console.error);
  };

  return (
    <div className='container rounded p-0 shadow-lg'>
      <header>
        <NavBar/>
      </header>
      <main className='overflow-auto bg-light bg-gradient p-4' style={{height: '700px'}}>
        <Routes>
          <Route path='/' element={(
            <Home
              allUniversities={universities}
              onSubmit={findUniversitiesFromCountry}
            />
          )}/>
          <Route path='/about-us' element={(
            <AboutUs/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
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
