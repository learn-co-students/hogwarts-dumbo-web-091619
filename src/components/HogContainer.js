import React, { Component } from 'react'
import PigTile from './PigTile'
import uuid from 'uuid'

export default class HogContainer extends Component {
	render() {
		const pigs = this.props.hogs.map(pig => {
			return <PigTile pig={pig} key={uuid()} />
		})

		return <div className='ui grid container'>{pigs}</div>
	}
}
