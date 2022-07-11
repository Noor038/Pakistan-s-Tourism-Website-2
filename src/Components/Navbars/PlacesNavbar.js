import React from 'react';
import { Link } from "react-router-dom";

class PlacesNavbar extends React.Component {
    render() {
        return (
            <div className='Places'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="options">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link to="/Home" class="nav-link">Home<span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#dams">Dams</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#mosques">Mosques</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#architecture">Architecture</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#lakes">Lakes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#rivers">Rivers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#mountains">Mountains</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#deserts">Deserts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default PlacesNavbar;