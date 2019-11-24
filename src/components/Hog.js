import React from 'react'
import HogDeets from './HogDeets'


class Hog extends React.Component{
    // set initial state
    constructor(){
        super()
        this.state = {clicked: false}
        this.handleDeetsClick = this.handleDeetsClick.bind(this)
        this.getImgSrc = this.getImgSrc.bind(this)
        // this.showDeets = this.showDeets.bind(this)
      }

       
      getImgSrc(){
        let hogFilename = this.props.hog.name.split(' ').join('_').toLowerCase()
        let hogUrl = require(`../hog-imgs/${hogFilename}.jpg`)
        return hogUrl
    }

      handleDeetsClick() {
        this.setState({ clicked: !this.state.clicked })  
      }

    render(){
         let hogImgSrc = `${this.getImgSrc()}`
        return(
            <div className="ui eight wide column" onClick={this.handleDeetsClick} >
                <h1>{this.props.hog.name}</h1>
                <img src={hogImgSrc} />
        <div>{this.state.clicked ? < HogDeets hog={this.props.hog}/> : null}</div>
            </div>
    )}
}
export default Hog

