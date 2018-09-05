import React from 'react';
import '../App.css';

import Header from '../components/Header';
// import TaskForm from '../components/TaskForm';
// import Tasks from '../components/Tasks';
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