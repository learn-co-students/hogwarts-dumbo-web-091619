import React from 'react'
import PigTile from './PigTile'
import uuid from 'uuid'

export default function HogContainer(props) {
	const pigs = props.hogs.map(pig => {
		return <PigTile pig={pig} key={uuid()} />
	})
	return <div className='ui grid container'>{pigs}</div>
}
