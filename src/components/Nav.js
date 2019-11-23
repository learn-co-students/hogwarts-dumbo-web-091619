import piggy from '../porco.png'
import React from 'react'

const Nav = () => {
	return (
		
		<div className="navWrapper" >
			<span className="headerText">HOG HOG HOG</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">HOG HOG HOG HOG HOG HOG HOG H O G H O G H O G</span>
			
		</div>
	)
}

export default Nav
