import React from 'react';
import {GotContent} from "../../types";

interface Props{
  newContent: GotContent;
}

const Content: React.FC<Props> = ({newContent}) => {
  return (
    <div className='p-3 d-flex border-bottom border-dark'>
      <p className={newContent.textCss}>
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
      <img className={newContent.imageCss} src={newContent.imageUrl} alt="about-university" style={{width: '500px'}}/>
    </div>
  );
};

export default Content;