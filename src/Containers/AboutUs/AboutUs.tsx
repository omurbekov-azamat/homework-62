import React from 'react';
import Contents from "../../Components/Content/Contents";
import {GotContent} from "../../types";

const AboutUs = () => {
  const someContent: GotContent[] = [
    {textCss: 'fs-5 order-2 fst-italic', imageCss: 'order-1 me-3', imageUrl: 'https://aif-s3.aif.ru/images/012/552/99886b60ec84eecf1312e230254dca99.jpg'},
    {textCss: 'fs-5 order-1 fw-bolder', imageCss: 'order-2 ms-3', imageUrl: 'https://studentstudy.com.ua/media/about/cover/1601545813_7393813_5e8b9ea32bdd0-5e8b9ea32bdd31280px-main_quadrangle_univers_POTxoQC.jpg'},
    {textCss: 'fs-5 order-2 fw-lighter', imageCss: 'order-1 me-3', imageUrl: 'https://kartinkin.net/uploads/posts/2022-02/1645092829_58-kartinkin-net-p-ucheba-kartinki-65.jpg'},
    {textCss: 'fs-5 order-1 fw-bolder', imageCss: 'order-2 ms-3', imageUrl: 'https://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'},
    {textCss: 'fs-5 order-2 fw-lighter', imageCss: 'order-1 me-3', imageUrl: 'https://narodna-pravda.ua/wp-content/uploads/2018/11/bigstock_happy_group_of_students_in_the_29868500.jpg'},
    {textCss: 'fs-5 order-1 fw-bolder', imageCss: 'order-2 ms-3', imageUrl: 'https://media.istockphoto.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=170667a&w=0&k=20&c=SgmIBBk1v6o00hTjG2rDvuek0zgNceDSKrgd5Jg9vuo='},
  ];

  return (
      <Contents newContents={someContent}/>
  );
};

export default AboutUs;