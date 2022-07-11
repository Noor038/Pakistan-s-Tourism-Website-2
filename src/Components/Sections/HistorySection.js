
import React from 'react';
import { Link } from "react-router-dom";

class HistorySection extends React.Component{
    render(){
        return(
        <div className='Home'>
            <div className="containerthree" id = "hostorical_places">
                <div className="text">
                    <h3>Historical Places Of Pakistan</h3>
                    <p>It’s no secret that Pakistan is a history lover’s dream. So many empires and religions ruled here, and though the country is technically only 73 years old, its land has been inhabited for millennia. Below are the places in Pakisatn having the importance due to thier history.</p>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src="Assets/CSS/Images/Pakistan_tower.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title gp">Minar e Pakistan</h5>
                            <p className="card-text">A national monument located in Lahore, Pakistan.The tower was built between 1960 and 1968 on the site where the All-India Muslim League passed the Lahore Resolution on 23 March 1940.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img src="Assets/CSS/Images/badshahi_mosque.jpg"  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title gp">Badshahi Mosque</h5>
                            <p className="card-text">A Mughal-era congregational mosque in Lahore, west of Lahore Fort along the outskirts of the Walled City of Lahore, Constructed by the Mughal emperor Aurangzeb between 1671 and 1673.</p>
                            </div>
                        </div>
                        
                    <div className="card">
                        <img src="Assets/CSS/Images/quaid_tomb.jpg" className="card-img-top"  alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title gp">Mizar e Quaid</h5>
                            <p className="card-text">Also known as Jinnah Mausoleum or the National Mausoleum, the final resting place of M Ali Jinnah, the founder of Pakistan. Designed in a 1960s modernist style, and completed in 1971.</p>
                        </div>
                    </div>
                
                    <div className="card">
                        <img src="Assets/CSS/Images/faisal_mosque.jfif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                           <h5 className="card-title gp">Shah Faisal Mosque</h5>
                           <p className="card-text">A national mosque of Pakistan, sixth-largest mosque in the world and the largest within South Asia, located on the foothills of Margalla Hills in Pakistan's capital city of Islamabad.</p>
                        </div>
                    </div>
                </div>
                <center><Link to = "/History"><button type="button" className="btn btn-info">Explore more <i className="fa fa-chevron-circle-right"></i></button></Link></center>
            </div>
        </div>
        );
    }
}
  
export default HistorySection;