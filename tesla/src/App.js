import './App.css';
import  Header from './components/header/header'
import Inventory from './components/inventory/inventory'
import Main_part from "./components/main/main";

function Main_page (){
    return (
      <div>
        <div className="header-items"> < Header/> </div>
        <div className="inventory-items"> <Inventory/> </div>
        <div className="empty"> </div>
        <div className="empty2"> </div>
        <Main_part/>
      </div>

    )
}
export default Main_page