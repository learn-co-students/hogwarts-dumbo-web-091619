import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogsIndex from './HogsIndex'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      greaseFilter: false,
      sortBy: ""
    }
    this.toggleFilter = this.toggleFilter.bind(this)
    this.filterHogs = this.filterHogs.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.sortHogs = this.sortHogs.bind(this)
  }

  toggleFilter(){
    this.setState({
      greaseFilter: !this.state.greaseFilter
    })
    console.log("state toggled!")
  }

  filterHogs(){
    if(!!this.state.greaseFilter){
      
      return hogs.filter(hog => hog.greased)
    }else{
      
      return hogs
    }
  }


  handleSelectChange(event){
    this.setState({ sortBy: event.target.value })
  }

  sortHogs(){
    let previouslyFiltered = this.filterHogs()
    switch (this.state.sortBy) {
      case "weight":
        return previouslyFiltered.sort((a, b) => {
          return b.weight - a.weight
        })
      case "name":
        return previouslyFiltered.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      default:
        return previouslyFiltered
    }
  }
  render() {
    return (
      <div className="App">
          < Nav />
          < Filter toggleFilter={this.toggleFilter} greaseFilter={this.state.greaseFilter} handleSelectChange={this.handleSelectChange}/>
          <HogsIndex hogs={this.sortHogs()}/>
          <div className="ui grid container">
          <div className="ui eight wide column">
            {HogsIndex}
          </div>
        </div>
      </div>
    )
  }
}

export default App
