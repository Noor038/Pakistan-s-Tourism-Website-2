import React from 'react';
import { Link } from "react-router-dom";


class HistoryNavbar extends React.Component {
    render() {
        return (
            <div className='History'>
                <div class="cont">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="options">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/Home" class="nav-link">Home<span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Places" class="nav-link">Explore_Beauty</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Home" class="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default HistoryNavbar;