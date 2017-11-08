import React from 'react'
import ReactDom from 'react-dom'
import {HelloPlanet} from './components/HelloPlanet'
/*
var obj = {
  myFavNumber: 12
}
*/
ReactDom.render(
  <div>
    <HelloPlanet name='Joshe' num={5} />
  </div>,
  document.getElementById('firstapp')
)
