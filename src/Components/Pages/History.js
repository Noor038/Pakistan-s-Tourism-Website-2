import React from 'react';

import HistoryCards from '../Cards/HistoryCards';
import HistoryNavbar from '../Navbars/HistoryNavbar';
import HistoryFooter from '../Footers/HistoryFooter';


class History extends React.Component {
  render() {
    return (
      <div className='History'>
        <a class="scrollToTop" href="javascript:topFunction();">
          <button type="button" class="btn btn-info btn-circle btn-xl" id="myBtn" title="Go to top"><i class="fa fa-chevron-circle-up"></i></button>
        </a>

        {/* Navbar */}
        <HistoryNavbar />
        <h1>Historical Places in Pakistan</h1>

        {/* Cards */}
        <HistoryCards/>
     

        {/* Footer */}
        <HistoryFooter/>

      </div >
    );
  }
}

export default History;