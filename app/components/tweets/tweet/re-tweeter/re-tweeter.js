import React from 'react'

import './re-tweeter.css'

export default (props) => {
  if (props.retweeted_status) {
    return (
      <div className='re-tweeter'>
        <i className="fas fa-retweet"></i>
        <span className="re-tweeter-name">
          {props.name} Retweeted
        </span>
      </div>
    )
  } else { return null }
}