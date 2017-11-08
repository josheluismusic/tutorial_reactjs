import React from 'react'
import PropTypes from 'prop-types'
import {PlanetProperties} from './PlanetProperties';

export class HelloPlanet extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      counter: 0
    }
    this.updateThisCounter = this.updateThisCounter.bind(this)
  }

  updateThisCounter(){
    this.setState({counter: this.state.counter + 1})
  }

  render () {
    return <div>
              <span>{this.state.counter}</span>
              <PlanetProperties triggerParentUpdate={this.updateThisCounter}/>
           </div>
  }
}
