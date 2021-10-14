import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import banner1 from '../../images/Slider/1.jpg'
import banner2 from '../../images/Slider/2.jpg'
import banner3 from '../../images/Slider/3.jpg'
import banner4 from '../../images/Slider/4.jpg'
import banner5 from '../../images/Slider/5.jpg'
import banner6 from '../../images/Slider/6.jpg'
import banner7 from '../../images/Slider/7.jpg'
import banner8 from '../../images/Slider/8.jpg'
import banner9 from '../../images/Slider/9.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner1}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner2}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner3}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner4}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner5}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner6}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner7}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner8}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner9}
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Professional Cleaning Service For Your Home</h3>
                    <p>Best Home Cleaning Service Since 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;