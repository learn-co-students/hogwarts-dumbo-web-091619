import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from '../containters/PigPen'
// import cherub from '../public/hog-imgs/cherub.jpg'

class App extends Component {
  state = {
    hogs: hogs
  }

  render() {
    console.log(hogs)
    return (
      <div className="App">
         <Nav />
         <PigPen  hogs={this.state.hogs}/>
         </div>
    )
  }
}

export default App;
