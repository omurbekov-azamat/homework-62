import React from 'react';
import {GotUniversity} from "../../types";
import Universities from "../../components/University/Universities";
import MainForm from "../../components/MainForm/MainForm";
import Carousel from "../../components/Carousel/Carousel";

interface Props {
  allUniversities: GotUniversity[]
  onSubmit: (country: string) => void;
}

const Home: React.FC<Props> = ({allUniversities, onSubmit}) => {
  return (
    <div>
      <div className='d-flex justify-content-between pb-5 mb-4 border-bottom border-danger'>
        <Universities allUniversities={allUniversities}/>
        <div style={{width: '600px'}}>
          <MainForm onSubmit={onSubmit}/>
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
    </div>

  );
};

export default Home;