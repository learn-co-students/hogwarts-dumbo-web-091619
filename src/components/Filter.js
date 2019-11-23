import React from 'react'

const Filter = ({
    toggleFilter,
    greaseFilter
}) => {
    console.log(greaseFilter)
    
	return (
		<div className="filterWrapper">
			<div className="ui menu">
					<button onClick={toggleFilter}>
				            GREASY BOYS ONLY?!?!?!
                    </button>
                    <label>Current Grease Status: {`${greaseFilter}`}</label>
		
			</div>
		</div>
	)
}

export default Filter