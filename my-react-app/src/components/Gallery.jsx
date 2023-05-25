import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
    {
      image: art5, 
      alt: 'art5',
      title: 'Custom Art 5',
      desc: 'Lorem ipsum blapba poplio asiel'
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.image}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
