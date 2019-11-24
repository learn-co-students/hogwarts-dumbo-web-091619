import React from 'react'

class HogDeets extends React.Component{

    render(){
        const hog = this.props.hog
        const {greased} = hog
        const highestMedalAchieved = hog['highest medal achieved']
        const {weight} = hog
        return (
		<div className="description">
			{greased ? 'Greased' : 'Nongreased'}
			<p>
				Highest medal achived: {highestMedalAchieved}
			</p>
			<p>
				Weight:{weight}
			</p>
		</div>
	)}
}

export default HogDeets

