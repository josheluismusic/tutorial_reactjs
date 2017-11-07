import React from 'react'

export class HelloPlanet extends React.Component {
  render () {
    console.log(this.props)
    return <h1> Hey! You are on {this.props.name} your favorite number is {this.props.myObj.myFavNumber}</h1>
  }
}
