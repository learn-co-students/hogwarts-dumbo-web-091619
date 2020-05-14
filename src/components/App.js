import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'

class App extends Component {

  state = {
    isGreased: false,
    sortBy: ""
  }

  handleClickGreased = () => {
    this.setState({
      isGreased: !this.state.isGreased
    })
  }

  handleSortChange = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  hogsOnPage = (theseHogs) => {
    let sortedHogs = [...theseHogs]
    if(this.state.sortBy === "name"){
      sortedHogs.sort((a,b)=> (a.name > b.name) ? 1: -1)
    }
    if(this.state.sortBy === "weight"){
      sortedHogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    }
    return sortedHogs.map((hog, index) => (
      <li key={index}><div><Hog hog={hog} /></div><br /></li>
    ))
  }


  render() {
    const greased = [...hogs].filter((hog) => {
      return hog.greased === true
    })

    return (
      <div className="App">
        < Nav/>
        <h4>Filter By Greased:</h4>
        <button onClick={this.handleClickGreased}>{this.state.isGreased ? "True" : "False"}</button>
        <br />
        <h4>Sort By:</h4>
        <select value={this.state.sortBy} onChange={this.handleSortChange}>
        <option value="">Don't Sort</option>
          <option value="name">Sort By Name</option>
          <option value="weight">Sort By Weight</option>
        </select>
        <div><br /><br /></div>
          <ul className="ui grid container">
            {this.state.isGreased ? this.hogsOnPage(hogs):this.hogsOnPage(greased)}
          </ul>
      </div>
    )
  }
}

export default App;
