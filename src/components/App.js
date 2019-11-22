import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'

class App extends Component {

  state = {
    isGreased: false,
    sortedName: false,
    sortedWeight: false
  }

  handleClickGreased = () => {
    if(this.state.isGreased === false){
      this.setState({
        isGreased: true
      })
    } else {
      this.setState({
        isGreased: false
      })
    }
    
  }

    handleClickName = () => {
      if (this.state.sortedName === false) {
        this.setState({
        sortedName: true
        })

      } else {
        this.setState({
        sortedName  : false
        })
      }
    }

  handleClickWeight = () => {
    if (this.state.sortedWeight === false) {
      this.setState({
        sortedWeight: true
      })
    } else {
      this.setState({
        sortedWeight: false
      })
    }
  }
  


  render() {

    const greased = hogs.filter((hog) => {
      return hog.greased === true
    })

    const hogsOnPage = (theseHogs) => {
      if(this.state.sortedName === true){
        theseHogs.sort((a,b)=> (a.name > b.name) ? 1: -1)
      }
      if (this.state.sortedWeight === true) {
        theseHogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
      }
      return theseHogs.map((hog) => (
        <li><div><Hog hog={hog} key={hog.id} /></div><br /></li>
      ))
    }
  
    const hogTiles = hogsOnPage(hogs)
    const hogTilesGreased = hogsOnPage(greased)

    return (
      <div className="App">
          < Nav hogs={hogs} />
        <button onClick={this.handleClickGreased}>Filter By Greased? {this.state.isGreased ? "True" : "False"}</button>
        <button onClick={this.handleClickName}>Sort By Name</button>
        <button onClick={this.handleClickWeight}>Sort By Weight</button>
      <div><br /><br /></div>
          <ul className="ui grid container">
            {this.state.isGreased ? hogTilesGreased:hogTiles}
          </ul>
      </div>
    )
  }
}

export default App;
