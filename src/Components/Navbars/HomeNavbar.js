import React from 'react';
import { Link } from "react-router-dom";


class HomeNavbar extends React.Component {
    render() {
        return (
            <div className='Home'>

<nav className="navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav mr-auto options">
            <li class="nav-item">
              <a href="#explore_places">Explore_Beauty</a>
            </li>
            <li className="nav-item">
              <a href="#hostorical_places">Historical_Places</a>
            </li>

            <li className="nav-item">
              <Link to = "/Home" className="maplink">
                <img className="map" src="Assets/css/Images/logo.png" alt=""/>
              </Link>
            </li>

            <li className="nav-item">
              <Link to = "/History">Blogs</Link>
            </li>

            <li className="nav-item">
              <a href="#about">About_us</a>
            </li>
            <li className="nav-item">
              <a href = "#contact">Contact</a>
            </li>
          </ul>
      </nav>


</div>
        );
    }
}
export default HomeNavbar;