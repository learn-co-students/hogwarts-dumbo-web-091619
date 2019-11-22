import React from 'react'
import Hog from './Hog'
class HogsIndex extends React.Component {
    render(){
        let selectedHog = this.props.hogs.map((hog) => (
            < Hog hog={hog} key={hog.id}/>
            // console.log(hog)
        ))
        return(
        <div className="ui grid container" >{selectedHog}</div> 
        )
    }

}

export default HogsIndex