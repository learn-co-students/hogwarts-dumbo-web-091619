import React from 'react'

export default class extends React.Component {
	
	render(){
		// console.log(this.props)
		return(
			<div>
			{ this.props.hog.specialty }
			{ this.props.hog.greased }
			{ this.props.hog.weight }
			{ this.props.hog['highest medal achieved'] }
			</div>
		)
	}
	
}