import React from 'react';
import Contents from "../../components/Content/Contents";
import {GotContent} from "../../types";

const AboutUs = () => {
  const someContent: GotContent[] = [
    {textCss: 'fs-5 order-2 fst-italic', imageCss: 'order-1 me-3', imageUrl: 'https://aif-s3.aif.ru/images/012/552/99886b60ec84eecf1312e230254dca99.jpg'},
    {textCss: 'fs-5 order-1 fw-bolder', imageCss: 'order-2 ms-3', imageUrl: 'https://studentstudy.com.ua/media/about/cover/1601545813_7393813_5e8b9ea32bdd0-5e8b9ea32bdd31280px-main_quadrangle_univers_POTxoQC.jpg'},
    {textCss: 'fs-5 order-2 fw-lighter', imageCss: 'order-1 me-3', imageUrl: 'https://kartinkin.net/uploads/posts/2022-02/1645092829_58-kartinkin-net-p-ucheba-kartinki-65.jpg'},
  ];

  return (
    <div className='p-5'>
      <Contents newContents={someContent}/>
    </div>
  );
};

export default AboutUs;