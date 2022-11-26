import React from 'react';
import {GotUniversity} from "../../types";
import Universities from "../../components/University/Universities";
import MainForm from "../../components/MainForm/MainForm";

interface Props {
  allUniversities: GotUniversity[]
  onSubmit: (country: string) => void;
}

const Home: React.FC<Props> = ({allUniversities,onSubmit}) => {
  return (
    <div className='p-5 d-flex justify-content-between'>
      <Universities allUniversities={allUniversities}/>
      <MainForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Home;