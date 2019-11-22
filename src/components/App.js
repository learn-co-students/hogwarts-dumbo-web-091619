import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'

import hogs from '../porkers_data';

import HogsContainer from './HogsContainer.js'
import HogsDisplay from './HogsDisplay.js'

class App extends Component {

	state = {
		got_pig: null,
		hogs: hogs
	}

	get_pig = (got_pig) => {
		this.setState({
			got_pig: got_pig
		})
	}

	// showOnePig = (event) => {
	// 	const oneHog = [hogs[0]]
	// 	this.setState({
	// 		hogs: oneHog
	// 	})
	// }

	sort_by_weight = () => {
		const weight_sort = this.state.hogs.sort((hog1, hog2) =>
			hog1.weight - hog2.weight
		)
		this.setState({
			hogs: weight_sort
		})
	}

	sort_by_name = () => {
		const name_sort = this.state.hogs.sort((hog1, hog2) =>
			(hog1.name > hog2.name) ? 1 : -1
		)
		this.setState({
			hogs: name_sort
		})
	}

	filter_pig = (event) => {
		const value = event.target.value
		if (value === 'all') {
			this.setState({
				hogs: hogs
			})
		} else if (value === 'true') {
			const greased = hogs.filter( hog => hog.greased )
			this.setState({
				hogs: greased
			})
		} else {
			const not_greased = hogs.filter( hog => !hog.greased )
			this.setState({
				hogs: not_greased
			})
		}

	}

  render() {
	  console.log(this.state)
    return (
      <div className="App">
          < Nav />
			<HogsContainer hogs={ this.state.hogs } get_pig={ this.get_pig } />
			<button onClick={this.sort_by_weight}>Sort By Weight</button>
			<button onClick={this.sort_by_name}>Sort By Name</button>
			<select onChange={ this.filter_pig }>
				<option value="all">All</option>
				<option value="true">Greased</option>
				<option value="false">Not Greased</option>
			</select>
			{ (this.state.got_pig) ? <HogsDisplay hog={ this.state.got_pig } /> : null }
      </div>
    )
  }
}

export default App;
