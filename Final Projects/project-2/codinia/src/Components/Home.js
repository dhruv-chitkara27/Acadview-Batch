import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './Home.css';
import code1 from './code1.jpg';
import code2 from './code2.png';
import code6 from './code6.png';
import code7 from './code7.png';

class Home extends Component {
  render() {
    return (
      <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="bgimg"
      src={code2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="bgimg"
      src={code7}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="bgimg"
      src={code6}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    );
  }
}

export default Home;
