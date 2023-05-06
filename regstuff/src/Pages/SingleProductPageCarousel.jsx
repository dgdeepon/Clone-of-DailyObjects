import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SingleProductPageCarousel({initState}) {
  const [index, setIndex] = useState(0);

  

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={initState.images[0]}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={initState.images[1]}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={initState.images[2]}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={initState.images[3]}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={initState.images[4]}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={initState.images[5]}
          alt="Third slide"
        />
      </Carousel.Item>


    </Carousel>
  );
}

export default SingleProductPageCarousel