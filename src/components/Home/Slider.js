import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './slider-photos/professional-camera-blurred.jpg';
import img2 from './slider-photos/professional-young-photographer-taking-photos-indian-model-studio-with-leight.jpg';
import img3 from './slider-photos/bride-groom-pose-large-circle-lilac-garden.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='text-light'>WElcome to my photographic World</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-dark'>Welcome to my photographic World</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-dark'>Welcome to my photographic World</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;