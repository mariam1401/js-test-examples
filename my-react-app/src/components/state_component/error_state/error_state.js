import React from "react";
import errorIcon from "../../../error-905.svg";
import './error_state.css'

class Error_state extends React.Component{
    render() {
        return(
            <div className="error1">
                <div>
                    <img src={errorIcon}/>
                    <div>Something went wrong!<span className="errorMessage1">{this.props.message}</span></div>
                </div>
            </div>
        )
    }
}
export default Error_state