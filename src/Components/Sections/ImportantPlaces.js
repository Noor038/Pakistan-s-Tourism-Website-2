import React from 'react';
import { Link } from "react-router-dom";

class ImportantPlacesSection extends React.Component{
    render(){
        return(
        <div className='Home'>
            
            <div className="containertwo" id = "explore_places">
                <div className="text">
                    <h3>Explore Beauty of Pakistan</h3>
                    <p className='ex'>Natural beauty of Pakistan is un matched. Pakistan have world most beautiful places for visit, It is famous all around the world because of sky high mountains, lush green valleys, mighty rivers, beautiful lakes, and amazing wildlife.</p>
                </div>
                
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top a"   src="Assets/CSS/Images/dams.jpg" alt="" />
                        <h5 className="card-title gp">Dams Of Pakistan</h5>
                    </div>
                    
                    <div className="card">
                        <img className="card-img-top a"  src="Assets/css/Images/mosques.jpg" alt=""/>
                        <h5 className="card-title gp">Mosques Of Pakistan</h5>
                    </div>
                    
                    <div className="card">
                        <img className="card-img-top a"    src="Assets/css/Images/architecture.jpg" alt=""/>
                        <h5 className="card-title gp">Architecture Of Pakistan</h5>
                    </div>
                </div>
                
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top a" src="Assets/css/Images/Lakes.jpg" alt=""/>
                        <h5 className="card-title gp">Lakes & Rivers Of Pakistan</h5>
                    </div>
                    
                    <div className="card">
                        <img className="card-img-top a"  src="Assets/css/Images/mountains.png" alt=""/>
                        <h5 className="card-title gp">Mountains Of Pakistan</h5>
                    </div>
                    
                    <div className="card">
                        <img className="card-img-top a"   src="Assets/css/Images/deserts.jpg" alt=""/>
                        <h5 className="card-title gp">Deserts Of Pakistan</h5>
                    </div>
                </div> 
                
                <div className = "popup-image">
                    <span>&times;</span>
                    <img src = "Assets/CSS/Images/dams.jpg"/>
                    </div>
                    
                    <center><Link to = "/Places"><button type="button" className="btn btn-info">Explore more <i className="fa fa-chevron-circle-right"></i></button></Link></center>
                </div>
            </div>
           
            );
        }
    }
      
export default ImportantPlacesSection;