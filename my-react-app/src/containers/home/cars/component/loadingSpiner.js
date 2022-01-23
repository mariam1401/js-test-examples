import React from "react"
import './loadingSpiner.css'

class LoadingSpinner extends React.Component{
    render() {
        return(
            <div className="lds-ring">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        )
    }
}
export default LoadingSpinner