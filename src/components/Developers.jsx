import React from 'react';
import { Carousel } from 'react-bootstrap';


function Developers() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/dp7y71F/gabrieledited.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Gabriel</h3>
            <p>Will probably use his coding skills to use drones to drop off seeds all over our planet</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/7y4FTMF/patrykedited.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Patryk</h3>
            <p>A coder with passion for design met with a love for nature (and gradients)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Xs99R3J/auraedited.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Aura</h3>
            <p>Coding, architecture, nature, music and her cat Mingus = Aura</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/gvGZmpX/marijnedited.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Marijn</h3>
            <p>Has a big heart for easthetics and loves the creativity and order required to code</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Developers;
