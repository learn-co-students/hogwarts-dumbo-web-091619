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
        //change display of a component
        if(this.state.isDisplayed === false){
            this.setState({
                isDisplayed: true
            })
        } else {
            this.setState({
                isDisplayed: false
            })
        }
    }

    hideThisPig = () => {
        if (this.state.hide === false) {
            this.setState({
                hide: true
            })
        } else {
            this.setState({
                hide: false
            })
        }
    }


    render(){
        const isDisplayed = this.state.isDisplayed
        const thisHogsPicture = this.getPictureName(this.props.hog.name)
        const hidden = this.state.hide
        let paragraph;
        if (isDisplayed){
            paragraph = <div><br /><p>Specialty: {this.props.hog.specialty}</p><p> Greased? {this.props.hog.greased ? "Yes" : "No"}</p><p> Weight: {this.props.hog.weight}</p></div>
        }
        if(!hidden){
            return <div className="ui eight wide column" onClick={this.handleClick} name={this.props.hog.name}><button onClick={this.hideThisPig}>Hide This Pig!</button><br /><img src={thisHogsPicture}></img><br />Name: {this.props.hog.name}{paragraph}</div>
        } else {
            return <button onClick={this.hideThisPig}>Reveal This Pig!</button>
        }
    }
}