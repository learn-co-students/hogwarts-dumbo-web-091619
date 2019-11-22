import React from 'react'
import HogsItem from './HogsItem.js'


export default class HogsList extends React.Component {

	render() {
		// console.log(this.props)
		const distribute_hogs = this.props.hogs_list.map((hog) =>
			<HogsItem key={hog.name} hog={ hog } get_pig={ this.props.get_pig }/>
		)
		return(
			<div className="maxPigTile">
			{ distribute_hogs }
			</div>
		)
	}

}