import React from "react";
import './slide-sjow.css'
import image1 from  '../../../../images/compositor (1).jpeg';
import image2 from  "../../../../images/compositor (3).jpeg";
import image3 from  "../../../../images/compositor.jpeg";
import leftArrow from '../../../../images/left-chevron.png';
import rightArrow from '../../../../images/next.png'
import {MdNavigateNext,GrFormPrevious} from 'react-icons/all'
import Arrow from "./arrows/arrow";
import ImageSlide from "./image-slide/image-slide";

const slides =[
    {image:image1},
    {image: image2},
    {image: image3},
];


class Slider extends React.Component {
// let Slider = React.createClass({
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);

    }
    previousSlide () {
        console.log("prev")
        const lastIndex = slides.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }
    nextSlide () {
        const lastIndex = slides.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;


        this.setState({
            currentImageIndex: index
        });
    }
    render () {
        return (
            <div className="slideShow-container">
                <Arrow direction="left" clickFunction={ this.previousSlide } src={leftArrow} />
                <ImageSlide image = {slides[this.state.currentImageIndex]} />
                <Arrow direction="right" clickFunction={ this.nextSlide } src={rightArrow} />
            </div>
        );
    }
}
export default Slider