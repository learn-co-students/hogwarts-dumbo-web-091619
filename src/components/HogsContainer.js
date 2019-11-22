import React from 'react'
import HogsList from './HogsList.js'

export default class HogsContainer extends React.Component {

	render() {
		// console.log(this.props)
		return(
			<div>
			<HogsList hogs_list={ this.props.hogs } get_pig={ this.props.get_pig }/>
			</div>
		)
	}

}