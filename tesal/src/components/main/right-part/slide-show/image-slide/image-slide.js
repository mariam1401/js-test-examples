import React from "react";
import './image-slide.css'


const ImageSlide = ({ image}) => {
    return (
        <div className="image-slide">
            <img  src={image.image} alt="Logo" />
        </div>
    );
}
export default ImageSlide
