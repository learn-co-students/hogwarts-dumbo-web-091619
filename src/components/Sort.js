import React from 'react'

export default function Sort(props) {
	const handleClick = event => {
		props.sortBy(event.target)
	}

	return (
		<div>
			<button onClick={handleClick}>{props.buttonName}</button>
		</div>
	)
}
