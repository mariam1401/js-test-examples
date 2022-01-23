import './App.css';
import React from "react";
import AddUser from "./containers/Sign-Up/addUser";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./containers/home/home";
import AddCar from "./containers/addCar/addCar";
import AllCars from "./containers/allCars/allCars";


function Users() {
 return (
     <BrowserRouter>
      <Switch>
          <Route exact path="/">
     <div className="flex-container">

         <AddUser/>
     </div>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/addCar'>
              <AddCar/>
          </Route>
          <Route exact path='/allCars'>
              <AllCars/>
          </Route>

      </Switch>
     </BrowserRouter>
 );
}
 export default Users