import React from 'react'
import Sort from './Sort'

export default function FilterBar(props) {
	return (
		<div>
			<Sort sortBy={props.toggleFilter} buttonName={'Sort Greased'} />
			{/* this second button being covered by a div so need to move so can click on whole but not just the middle.  */}
			<Sort sortBy={props.toggleName} buttonName={'Sort By Name'} />
		</div>
	)
}
