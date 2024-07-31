import "../styles/nav.css"
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import ForwardArrow from "../images/arrow_forward.png"

const Nav = () => {
  return (
    <div className="mainNavBox">

        <div className="box1">
            <div className="address">
                <p>33 Island Road</p>
                <p>Avalonia, NZ</p>
            </div>
            <div className="nav1">
                <Link className="navLinks1" id="home">HOME</Link>
                <Link className="navLinks1" id="our-rooms">OUR ROOMS</Link>
            </div>
        </div>

      
        <img src={logo} alt="Logo" id="logo"/>
        
        <div className="box2">
            <div className="phoneAndBook">
                <p>1-800-777-2345</p>
                <Link id="bookYourStay">Book your stay <img src={ForwardArrow} alt="Forward Arrow" className="forwardArrow"/></Link>
            </div>
            <div className="nav2">
                <Link className="navLinks2" id="activities">ACTIVITIES</Link>
                <Link className="navLinks2" id="account">ACCOUNT</Link>
            </div>
        </div>

    </div>

  );
};

export default Nav;