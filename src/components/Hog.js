import React, {Component} from 'react' 

export default class Hog extends Component {

    state = {
        isDisplayed: false,
        hide: false
    }

    getPictureName(thisHog){
        let newName = thisHog.toLowerCase().split(" ").join("_")
        return require("../hog-imgs/" + newName + ".jpg")
    }

    handleClick = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    hideThisPig = () => {
        this.setState({
            hide: !this.state.hide
        })
    }


    render(){
        const thisHogsPicture = this.getPictureName(this.props.hog.name)
        let paragraph;
        if (this.state.isDisplayed){
            paragraph = <div><br /><p>Specialty: {this.props.hog.specialty}</p><p> Greased? {this.props.hog.greased ? "Yes" : "No"}</p><p> Weight: {this.props.hog.weight}</p></div>
        }
        if(!this.state.hide){
            return <div className="ui eight wide column card" onClick={this.handleClick} name={this.props.hog.name}><button onClick={this.hideThisPig}>Hide This Pig!</button><br /><img src={thisHogsPicture} alt={`${this.props.hog.name} hog`}></img><br />Name: {this.props.hog.name}{paragraph}</div>
        } else {
            return <div className="ui eight wide column card"><button onClick={this.hideThisPig}>Reveal This Pig!</button></div>
        }
    }
}