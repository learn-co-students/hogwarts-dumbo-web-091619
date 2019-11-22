import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsIndex from './HogsIndex'

class App extends Component {
  constructor(){
    super()
    this.state = {hogs: hogs}
  }
  render() {
    return (
      <div className="App">
          < Nav />
          <HogsIndex hogs={hogs}/>
          <div className="ui grid container">
          <div className="ui eight wide column">
            {HogsIndex}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
