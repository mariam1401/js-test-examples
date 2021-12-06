import React from "react"
import './right-part.css'
import OrderOnline from "./order-online/order-online";
import BottomPart from "./bottom-part/bootom-part";
import CarInformation from "./car-information/car-information";
import Slider from "./slide-show/slide-show";
import TopPart from "./top-part/top-part";

class RightPart extends React.Component{
    render() {
        return(
            <div className="right-items">
               <OrderOnline/>
                <div className="cars">
                    <div className="car-show">
                       <TopPart/>
                       <Slider/>
                       <CarInformation/>
                       <BottomPart/>
                    </div>
                    <div className="car-show">
                        <TopPart/>
                        <Slider/>
                        <CarInformation/>
                        <BottomPart/>
                    </div>
                </div>

            </div>
        )
    }
}
export default RightPart

// import image1 from "../../../images/compositor (1).jpeg";
// import image2 from "../../../images/compositor (3).jpeg";
// import image3 from "../../../images/compositor.jpeg";
// import leftArrow from "*.png";
// import rightArrow from "*.png";
//
// const slides =[
//     {image:image1},
//     {image: image2},
//     {image: image3},
// ];
//
// const Arrow = ({ direction, clickFunction,}) => (
//     <div
//         className={ `slide-arrow ${direction}` }
//         onClick={ clickFunction }>
//     </div>
// );
//
// const ImageSlide = ({ image}) => {
//     return (
//         <div className="image-slide">
//             <img  src={image.image} alt="Logo" />
//         </div>
//     );
// }
//
// class Slider extends React.Component {
// // let Slider = React.createClass({
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentImageIndex: 0
//         };
//         this.nextSlide = this.nextSlide.bind(this);
//         this.previousSlide = this.previousSlide.bind(this);
//
//     }
//     previousSlide () {
//         const lastIndex = slides.length - 1;
//         const { currentImageIndex } = this.state;
//         const shouldResetIndex = currentImageIndex === 0;
//         const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
//
//         this.setState({
//             currentImageIndex: index
//         });
//     }
//     nextSlide () {
//         const lastIndex = slides.length - 1;
//         const { currentImageIndex } = this.state;
//         const shouldResetIndex = currentImageIndex === lastIndex;
//         const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
//
//
//         this.setState({
//             currentImageIndex: index
//         });
//     }
//     render () {
//         return (
//             <div className="carousel">
//                 <Arrow direction="left" clickFunction={ this.previousSlide }  src={leftArrow}/>
//                 <ImageSlide image = {slides[this.state.currentImageIndex]} />
//                 <Arrow direction="right" clickFunction={ this.nextSlide }  src={rightArrow}/>
//             </div>
//         );
//     }
// }
//
//
// export default Slider