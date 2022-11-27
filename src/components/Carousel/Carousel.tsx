import React from 'react';
import 'bootstrap/js/src/carousel';

const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img style={{height: '600px'}} src="https://travelsmartclub.com/common/kcstorage/images/oxford-university.jpg"
               alt="Oxford" className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h3 className='text-white fs-1'>Номер 1. University of Oxford (#5 в мире, #1 в UK)</h3>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img style={{height: '600px'}} className="d-block w-100"
               src="https://travelsmartclub.com/common/kcstorage/images/88.jpg" alt="Cambridge"/>
          <div className="carousel-caption d-none d-md-block">
            <h3 className='text-white fs-1'>Номер 2. University of Cambridge (#7 в мире, #2 в UK)</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img style={{height: '600px'}} className="d-block w-100"
               src="https://travelsmartclub.com/common/kcstorage/images/7d8cdb5ee645f3963eb0c272feb31670.jpg"
               alt="collegeLondon"/>
          <div className="carousel-caption d-none d-md-block">
            <h3 className='text-white fs-1'>Номер 3. University College London (#9 в мире, #3 в UK)</h3>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
};

export default Carousel;