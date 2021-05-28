import React from "react";
import {Carousel} from 'react-bootstrap';


const Carousels = () => {
    return(
        <div className="row">
          <div className="col-12" >
              <Carousel controls={false} fade={true} >
                    <Carousel.Item  interval={4000}>
                      <img
                        className="d-block w-100"
                        src="/image/5.jpg"
                        alt="one.jpg"
                        height="450px"
                      />
                    </Carousel.Item>

                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100"
                        src="/image/2.jpg"
                        alt="two.jpg"
                        height="450px"
                        width="100%"
                      />

                    </Carousel.Item>

                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100"
                        src="/image/3.jpg"
                        alt="three.jpg"
                        height="450px"
                        width="10px"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100"
                        src="/image/9.jpg"
                        alt="three.jpg"
                        height="450px"
                        width="10px"
                      />
                    </Carousel.Item>
              </Carousel>
          </div>
        </div>
    );
};

export default Carousels;