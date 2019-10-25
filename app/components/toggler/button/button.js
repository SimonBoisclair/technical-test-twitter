import React from 'react'
import './button.css'

export default (props) => {
  return ( 
    <button 
      onClick={()=>{
        props.selectPolitician({
          twitterAccountName : props.element[0], 
          name : props.element[1].name,
        })
      }}
      key={props.element[0]}
      style={{backgroundColor:props.element[0]===props.selectedPolitician?'#dff':'white'}}
      className="button"
    >
      {props.element[1].name}
    </button>
  )
}