import React from 'react';
import {GotContent, GotUniversity} from "../../types";
import Universities from "../../components/University/Universities";
import MainForm from "../../components/MainForm/MainForm";
import Carousel from "../../components/Carousel/Carousel";
import Contents from "../../components/Content/Contents";

interface Props {
  allUniversities: GotUniversity[]
  onSubmit: (country: string) => void;
}

const Home: React.FC<Props> = ({allUniversities, onSubmit}) => {
  const someContent: GotContent[] = [
    {textCss: 'fs-5 order-2 fst-italic', imageCss: 'order-1 me-3', imageUrl: 'https://www.onatlas.com/wp-content/uploads/2019/03/education-students-people-knowledge-concept-P6MBQ5W-1080x675.jpg'},
    {textCss: 'fs-5 order-1 fw-bolder', imageCss: 'order-2 ms-3', imageUrl: 'https://oregonstate.edu/sites/default/files/paragraphs/linc-quad_0.jpg'},
    {textCss: 'fs-5 order-2 fw-lighter', imageCss: 'order-1 me-3', imageUrl: 'https://www.bsdc.ac.uk/images/UniversityLevel/Staffordshire-Uni-In-Partnership-Banner-02web.jpg'},
  ];


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
      <Contents newContents={someContent}/>
    </div>
  );
};

export default Home;