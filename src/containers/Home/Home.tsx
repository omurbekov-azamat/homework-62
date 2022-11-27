import React from 'react';
import {GotUniversity} from "../../types";
import Universities from "../../components/University/Universities";
import MainForm from "../../components/MainForm/MainForm";

interface Props {
  allUniversities: GotUniversity[]
  onSubmit: (country: string) => void;
}

const Home: React.FC<Props> = ({allUniversities, onSubmit}) => {
  return (
    <div className=''>
      <div className='p d-flex justify-content-between mb-3 pb-5 border-bottom border-danger'>
        <Universities allUniversities={allUniversities}/>
        <div style={{width: '600px'}}>
          <MainForm onSubmit={onSubmit}/>
          <p className='mt-5 fs-3'>
            Мы собрали для Вас все университеты мира в одном месте. Данная сайт поможет людям со всего мира найти
            университет по своим запросам.
            Вы с легкостью можете выбрать университет в любой стране мира, а нажав на ссылку любого университета, вы
            попадаете на сайт учебного заведения где можете узнать все интересующие вас подробности, либо на прямую
            связаться с учебным заведением.
          </p>
        </div>
      </div>
      <div className='border border-dark p-3'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid aut dolore dolores eos et id illo
          iure labore magnam, molestias omnis provident quaerat quisquam similique sint ullam unde velit voluptas?
          Dolorum
          esse eum quibusdam repudiandae sed! Alias architecto commodi distinctio doloremque explicabo facilis id ipsam
          magni neque numquam pariatur perferendis praesentium provident quaerat quisquam repudiandae, sit sunt suscipit
          tempore ut velit, vero voluptate voluptates? Adipisci doloribus et facilis fugit, illo iste libero magni
          maiores, neque nisi non officiis perspiciatis vero voluptatibus, voluptatum? Aliquam et nemo numquam, quas
          quia
          quidem quisquam recusandae rem sequi voluptatem! Adipisci placeat soluta unde?
        </p>
      </div>
    </div>

  );
};

export default Home;