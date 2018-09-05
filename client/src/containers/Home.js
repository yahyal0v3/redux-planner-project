import React from 'react';
import '../App.css';

import Header from '../components/Header';
import About from '../components/About';
// import EventForm from '../components/EventForm';
// import Events from '../components/Events';
// import Footer from '../components/Footer';

class Home extends React.Component {

   render() {

      return (
        <div className="Home">
          <Header />
          <About />
          {/* <EventForm />
          <Events />
          <Footer/> */}
        </div>
      );
    }
  }



export default Home;