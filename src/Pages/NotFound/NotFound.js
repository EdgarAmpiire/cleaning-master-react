import React from 'react';
import img from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        // if page not found then show this page 
        <div className="text-center">
            <div className="top-margin"></div>
            <img src={img} alt="" className="not-found" />
        </div>
    );
};

export default NotFound;