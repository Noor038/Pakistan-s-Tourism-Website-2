import React from 'react';
import ContactForm from '../Forms/Contactform';

class ContactSection extends React.Component{
    render(){
        return(
        <div className='Home'>
            <div id ='contact'>
            <div className="containerthree" id = "hostorical_places">
                <div className="text">
                    <h3 id = "contact_h">Contact Us!</h3>
                    <p>If you know more about the beauty of Pakistan of historical places which make thier place in the beautiful land of Pakistan! Then feel free to contact us and let us know about them..!</p>
                </div>

                <ContactForm/>

            </div>
            </div>
                
        </div>
        );
    }
}
  
export default ContactSection;