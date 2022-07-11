import React from 'react';

class AboutSection extends React.Component{
    render(){
        return(
        <div className='Home'>
            <div className="container_abt" id = "about">
                <div className="image">
                    <img className='noor' src="Assets/css/Images/about.png" alt=""/>
                </div>
                <div className="text">
                    <h2>Noor us Sabah</h2>
                    <p>A web developer. Well atleast what want to be. Have created severel websites using HTML, CSS, Bootstrap, javascript. Currently a front end web developer but want to learn and practice the other end of website building. Want to learn UI/UX designing and create mobile app designs. Love to read books and listen to songs. When bored love to watch cartoons as well ;). Strength is hardwork, learning ability, and belief in self so can achieve any goal despite of the fact how much difficulties  have to face.</p>
                </div>
            </div>
        </div>
        );
    }
}

export default AboutSection;