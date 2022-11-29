import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import Universities from "../../components/University/Universities";
import MainForm from "../../components/MainForm/MainForm";
import Carousel from "../../components/Carousel/Carousel";
import Contents from "../../components/Content/Contents";
import {GotContent, GotCountry, GotUniversity} from "../../types";


const mainUrl = 'http://universities.hipolabs.com/search?country=';
const infoUrl = 'https://restcountries.com/v2/name/';

const Home = () => {
  const [universities, setUniversities] = useState<GotUniversity[]>([]);

  const fetchData = useCallback(async (url: string) => {

    const universitiesResponse = await axios.get<GotUniversity[]>(mainUrl + url);
    const aboutCountryResponse = await axios.get<GotCountry[]>(infoUrl + url);

    if (universitiesResponse.data.length !== 0) {
      const promises = universitiesResponse.data.map(async set => {
        return {
          country: set.country,
          domains: set.domains,
          name: set.name,
          capital: aboutCountryResponse.data[0].capital,
          flag: aboutCountryResponse.data[0].flag,
        };
      });
      const data = await Promise.all(promises);
      setUniversities(data);
    } else {
      alert('Please try another country!');
    }
  }, []);

  useEffect(() => {
    fetchData('kyrgyzstan').catch(console.error);
  }, [fetchData]);

  const findUniversitiesFromCountry = (newCountry: string) => {
    fetchData(newCountry).catch(console.error);
  };

  const someContent: GotContent[] = [
    {
      textCss: 'fs-5 order-2 fst-italic',
      imageCss: 'order-1 me-3',
      imageUrl: 'https://www.onatlas.com/wp-content/uploads/2019/03/education-students-people-knowledge-concept-P6MBQ5W-1080x675.jpg'
    },
    {
      textCss: 'fs-5 order-1 fw-bolder',
      imageCss: 'order-2 ms-3',
      imageUrl: 'https://oregonstate.edu/sites/default/files/paragraphs/linc-quad_0.jpg'
    },
    {
      textCss: 'fs-5 order-2 fw-lighter',
      imageCss: 'order-1 me-3',
      imageUrl: 'https://www.bsdc.ac.uk/images/UniversityLevel/Staffordshire-Uni-In-Partnership-Banner-02web.jpg'
    },
  ];


  return (
    <div>
      <div className='d-flex justify-content-between pb-5 mb-4 border-bottom border-danger'>
        <Universities allUniversities={universities}/>
        <div style={{width: '600px'}}>
          <MainForm onSubmit={findUniversitiesFromCountry}/>
          <p className='mt-5 fs-4'>
            Мы собрали для Вас все университеты мира в одном месте. Данный сайт поможет людям со всего мира найти
            университет по своим запросам.
            Вы с легкостью можете выбрать университет в любой стране мира, а нажав на ссылку любого университета, вы
            попадаете на сайт учебного заведения где можете узнать все интересующие вас подробности, либо на прямую
            связаться с учебным заведением.
          </p>
        </div>
      </div>
      <Carousel/>
      <Contents newContents={someContent}/>
    </div>
  );
};

export default Home;