import React from 'react';
import '../App.css';

import Header from '../components/Header';
import About from '../components/About';
// import TaskForm from '../containers/TaskForm';
// import Tasks from '../containers/Tasks';
// import Footer from '../components/Footer';

class Planner extends React.Component {

   render() {

      return (
        <div className="Planner">
          <Header />
          <About />
          {/* <TaskForm />
          <Tasks />
          <Footer/> */}
        </div>
      );
    }
  }



export default Planner;