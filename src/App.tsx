import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import {GotUniversity} from "./types";

const mainUrl = 'http://universities.hipolabs.com/search?country='

function App() {
  const [universities, setUniversities] = useState<GotUniversity[]>([])

  const fetchData = useCallback(async (url: string) => {
    const universitiesResponse = await axios.get<GotUniversity[]>(url);
    setUniversities(universitiesResponse.data);
  },[]);

  useEffect(() => {
    fetchData(mainUrl + 'United+States').catch(console.error)
  }, [fetchData]);

  const findUniversitiesFromCountry = (newCountry: string) => {
    fetchData(mainUrl + newCountry).catch(console.error)
  };

  return (
    <div className='container'>
      <header>
        <NavBar/>
      </header>
      <main>
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
    </div>
  );
}

export default App;
