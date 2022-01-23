import React from "react";
import './carComponent.css'


class CarComponent extends React.Component{
    render() {
        return(
            <label className='carComponent'>{this.props.text}</label>
        )
    }
}
export {CarComponent}