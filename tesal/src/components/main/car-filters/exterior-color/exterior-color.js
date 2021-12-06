import React from "react";
import './exterior-color.css'


class ExteriorColor extends React.Component {
    render() {
        return (
            <div className="exterior-paint">
                <div className="exterior-paint-header"><p className="exterior_paint_header">Exterior Paint</p></div>
                <div className="first-line">
                    <div className="withe-color"><input type="button" className="withe_color"/></div>
                    <div className="black-color"><input type="button" className="black_color"/></div>
                    <div className="brown-color"><input type="button" className="brown_color"/></div>
                    <div className="blue-color"><input type="button" className="blue_color"/></div>
                    <div className="light-grey-color"><input type="button" className="light_grey_color"/></div>
                </div>
                <br/>
                <div className="second-line">
                    <div className="grey-color"><input type="button" className="grey_color"/></div>
                    <div className="red-color"><input type="button" className="red_color"/></div>
                </div>
            </div>
        )
    }
}
export default ExteriorColor