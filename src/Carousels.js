import React from "react";
import {Carousel} from 'react-bootstrap';


const Carousels = () => {
    return(
        <div>
          <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/image/one.jpeg"
                    alt="one.jpg"
                    height="450px"
                    width="10px"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/image/two.jpeg"
                    alt="two.jpg"
                    height="450px"
                    width="10px"
                  />

                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/image/three.jpeg"
                    alt="three.jpg"
                    height="450px"
                    width="10px"
                  />
                </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default Carousels;