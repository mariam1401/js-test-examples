import React from "react";
import tesla_logo from '../../images/tesla.svg';
import './header.css'

class Header_part extends React.Component{
    render() {
        return(
            <div className="header">
                <a className="header-name" href="https://www.tesla.com/">
                    <img src={tesla_logo} className="tesla"/>
                </a>
                <ol className="nav-bar-center">
                    <li className="modelS">Model S</li>
                    <li className="model3" >Model 3</li>
                    <li className="modelX">Model X</li>
                    <li className="modelY" >Model Y</li>
                    <li className="solar-roof" >Solar Roof</li>
                    <li className="solar-panels" >Solar Panels</li>
                </ol>
                <ol className="nav-bar-right">
                    <li className="shop" >Shop</li>
                    <li className="account" >Account</li>
                    <li className="menu" >Menu</li>
                </ol>
            </div>
        )
    }
}
export default Header_part