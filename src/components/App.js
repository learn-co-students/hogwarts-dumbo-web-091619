import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogContainer from './HogContainer'
import FilterBar from './FilterBar'
import Sort from './Sort'

class App extends Component {
	state = {
		isFiltered: false,
		sortedByName: false,
	}

	toggleFilter = key => {
		this.setState({ isFiltered: !this.state.isFiltered })
	}

	toggleName = () => {
		this.setState({ sortedByName: !this.state.sortedByName })
	}

	filteredHogs = () => {
		return this.state.isFiltered ? hogs.filter(hog => hog.greased) : hogs
	}

	sortName = () => {
		return [...this.filteredHogs()].sort((hogA, hogB) =>
			hogA.name.localeCompare(hogB.name),
		)
	}

	renderHogs = () => {
		if (this.state.sortedByName) {
			return this.sortName()
		} else {
			return this.filteredHogs()
		}
	}

	render() {
		return (
			<div className='App'>
				<Nav />

				<FilterBar
					toggleFilter={this.toggleFilter}
					toggleName={this.toggleName}
				/>

				<HogContainer hogs={this.renderHogs()} />
			</div>
		)
	}
}

export default App
