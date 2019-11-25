import React, { Component } from 'react';
import Pig from './Pig'

function compare( a, b ) {
    if ( a.name < b.name ){
      return -1
    }
    if ( a.name > b.name ){
      return 1
    }
    return 0
}

export class PigPen extends Component {

    state = {
        hogs: this.props.pigs
    }

    sortGreased = () => {
        const greasedPigs = this.props.pigs.filter((pig) => {
            return pig.greased === true
        })

        console.log(greasedPigs)
        console.log(this.state.hogs)

        if (this.state.hogs.toString() === greasedPigs.toString()) {
            this.setState({
                hogs: this.props.pigs
            })
        } else {
            this.setState({
                hogs: greasedPigs
            })
        }
    }

    sortNames = () => {
        const sortedPigs = this.state.hogs.sort( compare )
        this.setState({
            hogs: sortedPigs
        })
    }

    sortWeight = () => {
        const sortedWeightPigs = this.props.pigs.sort(function (a, b) {
            return a.weight - b.weight;
          })
        this.setState({
            hogs: sortedWeightPigs
        })
    }

    render() {
    
        const pigArray = this.state.hogs.map((pig) => 
            <Pig hog={ pig } img={require(`../hog-imgs/${pig.name.replace(/[" "]/g, "_").toLowerCase()}.jpg`)} />)
            
        return (
            <div>
                <div className='ui grid container'>
                    <button onClick={this.sortGreased}>Greased?</button>
                    <button onClick={this.sortNames}>Alphabetized</button>
                    <button onClick={this.sortWeight}>Sort by Lightest Weight</button>
                </div>
                <div className='ui grid container'>
                    {pigArray}
                </div>
            </div>
        )
    }
}

export default PigPen;
