import React from 'react'

import './image.css'

export default (props) => {
  return (
    <div>
      <img className="profile-image" src={props.profile_image_url} alt="" />
    </div>
  )
}