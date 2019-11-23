import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsIndex from './HogsIndex'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      greaseFilter: false
    }
    this.toggleFilter = this.toggleFilter.bind(this)
    this.filterHogs = this.filterHogs.bind(this)
  }

  toggleFilter(){
    this.setState({
      greaseFilter: !this.state.greaseFilter
    })
    console.log("state toggled!")
  }

  filterHogs(hogs){
    if(!!this.state.greaseFilter){
      
      return hogs.filter(hog => hog.greased)
    }else{
      
      return hogs
    }
  }
  render() {
    return (
      <div className="App">
          < Nav />
          < Filter toggleFilter={this.toggleFilter} greaseFilter={this.state.greaseFilter}/>
          <HogsIndex hogs={this.filterHogs(hogs)}/>
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
