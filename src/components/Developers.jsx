import React from 'react';

const Developers = () => (
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      {/* <div class="carousel-item active">
        <img class="d-block w-100" src="" alt="First slide" />
      </div> */}
      <div class="carousel-item active">
        <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/62107918_10206249661397216_7844913913975013376_o.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_ohc=IseG6Docr1YAX-97Gja&_nc_ht=scontent-amt2-1.xx&oh=a275301cce08b7aeae8fb33c82c462c2&oe=5F6C07A4" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Patryk</h5>
          <p>...</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/48415041_2077839705617074_4402405262959312896_o.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=-6A4MrbAruoAX95NbcA&_nc_ht=scontent-amt2-1.xx&oh=815b6ea7dabb73a41985818e1e935be3&oe=5F6C39A4" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/54428365_2219778051378470_9068308204047302656_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=BAbwBnn1Nm4AX-z0ujp&_nc_ht=scontent-ams4-1.xx&oh=999c0eb149a06280312447a639869653&oe=5F69E117" alt="Third slide" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
);

export default Developers;
