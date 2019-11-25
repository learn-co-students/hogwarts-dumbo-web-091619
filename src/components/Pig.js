import React, { Component } from 'react';

export class Pig extends Component {
    
    state = {
        clicked: false,
        hidden: false
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            clicked: !this.state.clicked
        })
    }

    handleHide = () => {
        this.setState({
            ...this.state, 
            hidden: !this.state.hidden
        })
    }

    render() {
        // ES6 deconstruct the entire 'Pig' object
        const { name, specialty, greased, weight, 'highest medal achieved': medal } = this.props.hog
        
        let showPig 

        if (this.state.clicked) {
            if (!this.state.hidden) {
                showPig = (
                    <div className='ui card'>
                        <img alt={name} src={this.props.img} onClick={this.handleClick} />
                        <h2>{name}</h2>
                        <p>Specialty: {specialty}</p>
                        <p>Greased?: {greased ? 'Greased' : 'Not Greased'}</p>
                        <p>Weight: {weight}lbs</p>
                        <p>Highest Medal Earned: {medal}</p>
                        <button onClick={this.handleHide}>Hide</button>
                    </div>
                )
            } else {
                showPig = (
                    <div>
                        <h3>Classified</h3>
                        <button onClick={this.handleHide}>De-Classified</button>
                    </div>
                )
            }
        } else {
            showPig = (
                <div className='ui card' onClick={this.handleClick}>
                    <img alt={name} src={this.props.img}></img>
                    <h2>{name}</h2>
                </div>
            )
        }

        return (
            <div className='ui eight wide column'>
               {showPig}
            
            </div>
        )
    }
}

export default Pig;
