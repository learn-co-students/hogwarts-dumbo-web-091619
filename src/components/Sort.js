import React, { Component } from 'react'

export default class Sort extends Component {
	handleClick = event => {
		this.props.sortBy(event.target)
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>{this.props.buttonName}</button>
			</div>
		)
	}
}
