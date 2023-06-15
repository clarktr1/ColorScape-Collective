import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import art1 from '../assets/images/art1.jpeg'
import art2 from '../assets/images/art2.jpeg'
import art3 from '../assets/images/art3.jpeg'
import art4 from '../assets/images/art4.jpeg'
import art5 from '../assets/images/art5.jpeg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const images = [
    {
      image: art1, 
      alt: 'art1',
      title: 'Custom Art 1',
      desc: 'Lorem ipsum blapba poplio asiel'
    },
    {
      image: art2, 
      alt: 'art2',
      title: 'Custom Art 2',
      desc: 'Lorem ipsum blapba poplio asiel'
    },
    {
      image: art3, 
      alt: 'art3',
      title: 'Custom Art 3',
      desc: 'Lorem ipsum blapba poplio asiel'
    },
    {
      image: art4, 
      alt: 'art4',
      title: 'Custom Art 4',
      desc: 'Lorem ipsum blapba poplio asiel'
    },
  ];

  return (
    <div className='center column' style={{backgroundColor:'#ffff54'}} id='Gallery'>
      <h2 className='black' style={{marginTop:'10vh'}}>Gallery</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}  className='gallery-container center'>
        {images.map((image) => (
          <Carousel.Item >
            <img
              className="d-block w-100 c-img"
              src={image.image}
              alt={image.alt}
              key={image.alt}
            />
            <Carousel.Caption className='gallery-caption'>
              <h3>{image.title}</h3>
              <p>{image.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div class="divider"></div>
    </div>
  );
  
}

export default ControlledCarousel;
