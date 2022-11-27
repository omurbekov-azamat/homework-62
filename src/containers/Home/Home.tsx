import React from 'react';
import {GotContent, GotUniversity} from "../../types";
import Universities from "../../components/University/Universities";
import MainForm from "../../components/MainForm/MainForm";
import Contents from "../../components/Content/Contents";

interface Props {
  allUniversities: GotUniversity[]
  onSubmit: (country: string) => void;
}

const Home: React.FC<Props> = ({allUniversities, onSubmit}) => {
  const someContent: GotContent[] = [
    {textCss: 'fs-5 order-2 fst-italic', imageCss: 'order-1 me-3', imageUrl: 'https://aif-s3.aif.ru/images/012/552/99886b60ec84eecf1312e230254dca99.jpg'},
    {textCss: 'fs-5 order-1 fw-bolder', imageCss: 'order-2 ms-3', imageUrl: 'https://studentstudy.com.ua/media/about/cover/1601545813_7393813_5e8b9ea32bdd0-5e8b9ea32bdd31280px-main_quadrangle_univers_POTxoQC.jpg'},
    {textCss: 'fs-5 order-2 fw-lighter', imageCss: 'order-1 me-3', imageUrl: 'https://kartinkin.net/uploads/posts/2022-02/1645092829_58-kartinkin-net-p-ucheba-kartinki-65.jpg'},
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
      <Contents newContents={someContent}/>
    </div>

  );
};

export default Home;