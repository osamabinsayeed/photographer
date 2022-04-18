import React from 'react';
import Footer from '../Footer/Footer';
import Hire from '../Hiire/Hire';
import Services from '../Services/Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Services></Services>
            <Hire></Hire>
            <Footer></Footer>

        </div>
    );
};

export default Home;