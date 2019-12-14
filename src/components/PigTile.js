import React, { Component } from 'react'
/*eslint-disable-line no-undef*/
export default class PigTile extends Component {
	state = {
		hasBeenClicked: false,
	}

	photos = pigName => {
		pigName = pigName
			.split(' ')
			.join('_')
			.toLowerCase()
		let images = require(`../hog-imgs/${pigName}.jpg`)
		return images
	}

	onClick = e => {
		console.log('hey @')
		this.setState({ hasBeenClicked: !this.state.hasBeenClicked })
	}

	render() {
		const {
			name,
			specialty,
			greased,
			weight,
			'highest medal achieved': medal,
		} = this.props.pig
		return (
			<div className='ui eight wide column'>
				{!this.state.hasBeenClicked ? (
					<img src={this.photos(name)} alt=''></img>
				) : (
					<ul>
						<h3>specialty</h3>
						<li>{specialty}</li>
						<h3>weight</h3>
						<li>{weight}</li>
						<h3>is greased? </h3>
						<li>{greased ? 'greased' : 'not greased'}</li>
						<h3>prize</h3>
						<li>{medal}</li>
					</ul>
				)}
				<h1 onClick={this.onClick}>{name}</h1>
			</div>
		)
	}
}
