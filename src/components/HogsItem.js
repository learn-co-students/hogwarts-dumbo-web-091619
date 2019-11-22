import React from 'react'
// import { Card } from 'semantic-ui-css'
import cmi from '../hog-imgs/augustus_gloop.jpg'
import cmp1 from '../hog-imgs/bay_of_pigs.jpg'
import cb from '../hog-imgs/cherub.jpg'
import efv from '../hog-imgs/galaxy_note.jpg'
import goldeneye from '../hog-imgs/leggo_my_eggo.jpg'
import hbmc from '../hog-imgs/mudblood.jpg'
import msts from '../hog-imgs/piggy_smalls.jpg'
import tkr from '../hog-imgs/porkchop.jpg'
import rainbow from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import pros from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import shuffle from '../hog-imgs/truffleshuffle.jpg'

const posterMap = {
  'Augustus Gloop': cmi,
  'Bay of Pigs': cmp1,
  'Cherub': cb,
  'Galaxy Note': efv,
  'Leggo My Eggo': goldeneye,
  'Mudblood': hbmc,
  'Piggy smalls': msts,
  'Porkchop': tkr,
  'Rainbowdash': rainbow,
  'Sobriety': sobriety,
  'The Prosciutto Concern': pros,
  'Trouble': trouble,
  'TruffleShuffle': shuffle
}

export default class HogsItem extends React.Component {

	render() {
		// console.log(this.props)
		return(
			<div className="pigTile" onClick={ () => { this.props.get_pig( this.props.hog ) } } >
			<img src={ posterMap[this.props.hog.name]} alt="shut up react" />
			<h3>{ this.props.hog.name }</h3>
			{ this.props.hog.specialty }
			{ this.props.hog.greased }
			{ this.props.hog.weight }
			{ this.props.hog['highest medal achieved'] }
			{/* <button></button> */}
			</div>
		)
	}

}