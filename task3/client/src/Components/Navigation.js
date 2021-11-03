import {Navbar} from 'react-bootstrap';
import {TiWeatherPartlySunny} from "react-icons/ti";

function Navigation(props) {
    return (
        <Navbar className="navbar justify-content-between" fixed="top">
            <Navbar.Brand className="text-white">
                <TiWeatherPartlySunny size={30} className="mb-1 mr-1"  style={{color: "white"}}/> 
                SmartWeather
            </Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;