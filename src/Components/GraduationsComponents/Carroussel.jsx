import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import C1 from '../../Images/Carroussel-1.jpeg';
import C2 from '../../Images/Carroussel-2.jpeg';
import C3 from '../../Images/Carroussel-3.jpeg';

export default class Carroussel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={1366} alt="evento-1" height={500} src={C1} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={1366} alt="evento-2" height={500} src={C2} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={1366} alt="evento-3" height={500} src={C3} />
        </Carousel.Item>
      </Carousel>
    )
  };
}
