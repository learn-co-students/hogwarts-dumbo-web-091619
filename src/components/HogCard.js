import React, { Component } from 'react'

export class Hogcard extends Component {
state ={
    clicked: false
}
    hogImageName = () => {
        const hogName = this.props.hog.name
       return hogName.toLowerCase().split(" ").join("_")
        
    }

    clickHandler = () => {
        // console.log("ffff")
this.setState({
    clicked: !this.state.clicked
})    }



    render() {
        return (
            <div className="ui eight wide column">
                <div className="pigTile"  onClick={this.clickHandler}>
                    <h3>{this.props.hog.name}</h3>
                   <img src={require(`../hog-imgs/${this.hogImageName()}.jpg`)}></img>
                   {this.state.clicked ? "true" : "false"}
                   <div></div>
                </div>
            </div>
        )
    }
}

export default Hogcard
