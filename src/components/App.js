import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import PigPen from './PigPen'

class App extends Component {

  render() {

    return (
      <div className="App">
          < Nav />
          < PigPen pigs={hogs} />
      </div>
    )
  }
}

export default App
