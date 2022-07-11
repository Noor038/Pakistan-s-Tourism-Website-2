import React from 'react';

import HistorySection from '../Sections/HistorySection';
import ImportantPlacesSection from '../Sections/ImportantPlaces';
import AboutSection from '../Sections/AboutSection';

import HomeNavbar from '../Navbars/HomeNavbar';
import HomeFooter from '../Footers/HomeFooter';

import ContactSection from '../Sections/ContactSection';


class Home extends React.Component {
  render() {
    return (
      <div className='Home'>

        <a className="scrollToTop" href="javascript:topFunction();">
          <button type="button" className="btn btn-info btn-circle btn-xl" id="myBtn" title="Go to top"><i className="fa fa-chevron-circle-up"></i></button>
        </a>

        {/* <!--header--> */}
        <div className="header">
          <HomeNavbar />

          <h1 className='explorers'>Let's Explore!</h1>
          <h3 className='explorers'>Aethetic Beauty Of Pakistan</h3>
          <p>"From the precipitous peaks of the Karakoram range to the fertile Indus River plain,<br />Pakistan is home to a diversity of stunning landscapes. While its rich cultural heritage,<br />ancient Silk Road, and ruins of Mohenjo-daro continue to enchant travelers,<br />venture further afield and discover a beautiful Pakistan."</p>
          <center><a href="https://www.nationalgeographic.com/travel/article/beautiful-natural-wonders"><button type="button" class="btn btn-info">Read more <i class="fa fa-chevron-circle-right"></i></button></a></center>

        </div>

        {/*<!--historical places--> */}
        <HistorySection />

        {/*  <!--important places--> */}
        <ImportantPlacesSection />

        {/*  <!--About--> */}
        <AboutSection />

   {/*  <!--Contact--> */}
        <ContactSection/>

        {/*  <!--Footer--> */}
        <HomeFooter />

      </div>
    );
  }
}
export default Home;