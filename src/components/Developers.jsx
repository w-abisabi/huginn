import React from 'react';
import { Carousel } from 'react-bootstrap';


function Developers() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/48415041_2077839705617074_4402405262959312896_o.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=-6A4MrbAruoAX95NbcA&_nc_ht=scontent-amt2-1.xx&oh=815b6ea7dabb73a41985818e1e935be3&oe=5F6C39A4"
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
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/62109457_10206249659837177_7520329869478068224_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=CxBLMRtvwRQAX-gva_N&_nc_ht=scontent-ams4-1.xx&oh=fa8f738de8ab1013d673928929d06d03&oe=5F6DE93B"
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
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/54428365_2219778051378470_9068308204047302656_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=BAbwBnn1Nm4AX-z0ujp&_nc_ht=scontent-ams4-1.xx&oh=999c0eb149a06280312447a639869653&oe=5F69E117"
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
            src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/10613027_10152700011554681_2358891484349819021_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=ivDYviIRESgAX_MMnbP&_nc_ht=scontent-amt2-1.xx&oh=96971a25e7a914163f2d0687177ab475&oe=5F6D3057"
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
