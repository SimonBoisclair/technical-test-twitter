import React from 'react'
import './screen-name.css'

export default (props) => {
  return (<div className="screen-name"> 
    @{props.screen_name}
  </div>)
}