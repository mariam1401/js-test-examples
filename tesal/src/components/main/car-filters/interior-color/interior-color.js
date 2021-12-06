import React from "react";
import './interior-color.css'

class InteriorColor extends React.Component{
    render() {
        return(
            <div className="interior-color">
                <div className="interior-color-header"><p className="interior_color_header">Interior Color</p></div>
                <div className="first-line-interior">
                    <div className="bright-black-color"><input type="button" className="bright-black_color"/></div>
                    <div className="black-color"><input type="button" className="black_color"/></div>
                    <div className="withe-color">
                        <input type="button" className="withe_color"/></div>
                    <div className="light-grey-color"><input type="button" className="light_grey_color"/></div>
                    <div className="grey-color"><input type="button" className="grey_color"/></div>
                </div><br/>
                    <div className="second-line-interior">
                        <div className="brown-color"><input type="button" className="brown_color"/></div>
                    </div>
            </div>
        )
    }
}
export default InteriorColor