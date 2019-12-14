import React, { Component } from 'react'
import Sort from './Sort'

export default class FilterBar extends Component {
	render() {
		return (
			<div>
				<Sort sortBy={this.props.toggleFilter} buttonName={'Sort Greased'} />
				{/* this second button being covered by a div so need to move so can click on whole but not just the middle.  */}
				<Sort sortBy={this.props.toggleName} buttonName={'Sort By Name'} />
			</div>
		)
	}
}
