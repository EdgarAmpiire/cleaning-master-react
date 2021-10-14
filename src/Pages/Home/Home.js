import React from 'react';
import Slider from '../Carousel/Slider';
import About from '../About/About';
import './Home.css'
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';
import Team from '../Team/Team';
import Process from '../Process/Process';
import Price from '../Price/Price';
import Review from '../Review/Review';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
            <WhyUs />
            <Team />
            <Process />
            <Price />
            <Review />
            <Blogs />
        </>
    );
};

export default Home;