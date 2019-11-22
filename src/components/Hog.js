import React from 'react'

let getImgSrc = (hogName) => {
    // let hogFilename = hogName.split(' ').join('_')
    // let hogUrl = `../hog-imgs/${hogFilename}.jpg`
    // console.log(hogUrl);
    return "/Users/gnome/Development/code/mod-4/hogwarts-dumbo-web-091619/src/hog-imgs/augustus_gloop.jpg" 
}
class Hog extends React.Component{



    render(){
         let hogName = this.props.hog.name
         let hogImgSrc = getImgSrc(hogName)
        //  let hogImgSrc = {  + getImgSrc(hogName)}
        return(
            <div className="ui eight wide column" >
                <h1>{this.props.hog.name}</h1>
                <img src={}/>
            </div>
    )}
}
export default Hog