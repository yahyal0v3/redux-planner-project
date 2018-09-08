import React from 'react';
import '../App.css';

import About from '../components/About';
import WhatToDo from '../components/WhatToDo';
import EventForm from './EventForm';
// import Footer from '../components/Footer';

class Home extends React.Component {

   render() {

      return (
        <div className="Home">
          <About />
          <WhatToDo />
          <EventForm />
          {/* <Footer/> */} 
        </div>
      );
    }
  }



export default Home;