import React  from "react"
import './loading.css'


class Loading extends React.Component{

    render() {
        return(
            <div className='loading'>
                <div className="loader"></div>
            </div>
        )
    }
}
export default Loading