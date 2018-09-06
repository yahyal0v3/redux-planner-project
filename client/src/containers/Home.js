import React from 'react';
import '../App.css';

import About from '../components/About';
// import EventForm from '../components/EventForm';
// import Events from '../components/Events';
// import Footer from '../components/Footer';

class Home extends React.Component {

   render() {

      return (
        <div className="Home">
          <About />
          {/* <EventForm />
          <Events />
          <Footer/> */}
        </div>
      );
    }
  }



export default Home;