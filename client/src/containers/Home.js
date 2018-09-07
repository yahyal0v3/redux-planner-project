import React from 'react';
import '../App.css';

import About from '../components/About';
import EventForm from './EventForm';
import Events from './Events';
// import Footer from '../components/Footer';

class Home extends React.Component {

   render() {

      return (
        <div className="Home">
          <About />
          <EventForm />
          <Events />
          {/* <Footer/> */} 
        </div>
      );
    }
  }



export default Home;