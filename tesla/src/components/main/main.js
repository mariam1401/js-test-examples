import React from "react";
import './main.css'
import CarFilters from "./car-filters/casr-filters";
import RightPart from "./right-part/right-part";


class Main_part extends React.Component{
    render() {
        return (
            <div className="main-div">
            <CarFilters/>
            <RightPart/>
            </div>
        );
}    }


export default Main_part