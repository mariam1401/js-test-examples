import React from "react";
import successIcon from '../../../success-svgrepo-com (1).svg'
import './successState.css'


class SuccessState extends React.Component{
    render() {
        return(
            <div className='successState'>
                <div className='success'>
                    <div><img src={successIcon}/></div>
                    <div><span>You successfully registered</span></div>
                </div>
            </div>
        )
    }
}
export default SuccessState