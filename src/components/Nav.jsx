import { Link } from "react-router-dom";
import ForwardArrow from "../images/arrow_forward.png";
import logo from "../images/logo.png";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="mainNavBox">

        <div className="box1">
            <div className="address">
                <p>33 Coral Reef Drive</p>
                <p>Malé, Maldives</p>
            </div>
            <div className="nav1">
                <Link to="/" className="navLinks1" id="home">HOME</Link>
                <Link to="/room-availability" className="navLinks1" id="our-rooms">OUR ROOMS</Link>
            </div>
        </div>

      
        <img src={logo} alt="Logo" id="logo"/>
        
        <div className="box2">
            <div className="phoneAndBook">
                <p>1-800-333-1111</p>
                <Link to="/booking" id="bookYourStay">Book your stay <img src={ForwardArrow} alt="Forward Arrow" className="forwardArrow"/></Link>
            </div>
            <div className="nav2">
                <Link to="/activity-availability" className="navLinks2" id="activities">ACTIVITIES</Link>
                <Link className="navLinks2" id="dining">ACCOUNT</Link>
            </div>
        </div>

    </div>

  );
};

export default Nav;