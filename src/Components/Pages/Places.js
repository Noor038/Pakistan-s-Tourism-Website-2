import React from 'react';

import PlacesCards from '../Cards/PlacesCards';
import PlacesNavbar from '../Navbars/PlacesNavbar';
import PlacesFooter from '../Footers/PlacesFooter';

class Places extends React.Component {
  render() {
    return (
      <div className='Places'>
        <div class="body">

          {/* Navbar */}
          <PlacesNavbar />

          {/* Card Images */}
          <PlacesCards />

        </div>
        
        {/* Footer */}
        <PlacesFooter />

      </div>
    );
  }
}

export default Places;