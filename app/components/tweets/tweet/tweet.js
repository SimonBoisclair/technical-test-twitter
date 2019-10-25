import React from 'react'

import ReTwitter from './re-tweeter/re-tweeter'
import Image from './image/image'
import Name from './name/name'
import ScreenName from './screen-name/screen-name'
import Text from './text/text'

import './tweet.css'

export default (props) => { 

  let retweeted_status
  let profile_image_url
  let name
  let screen_name
  let text

  if (props.element.retweeted_status) {
    retweeted_status = true
    try { profile_image_url = props.element.retweeted_status.user.profile_image_url } catch (err) { profile_image_url = "" }
    try { name = props.element.retweeted_status.user.name } catch (err) { name = "" }
    try { screen_name = props.element.retweeted_status.user.screen_name } catch (err) { screen_name = "" }
    try { text = props.element.retweeted_status.text } catch (err) { text = "" }
  } else {
    retweeted_status = false
    try { profile_image_url = props.element.user.profile_image_url } catch (err) { profile_image_url = "" }
    try { name = props.element.user.name } catch (err) { name = "" }
    try { screen_name = props.element.user.screen_name } catch (err) { screen_name = "" }
    try { text = props.element.text } catch (err) { text = "" }
  }

  return (
    <div className="tweet">
      <ReTwitter retweeted_status={retweeted_status} name={name}/>
      <div className="profile-image-url">
        <Image profile_image_url={profile_image_url} />
        <div>
          <div className="name-and-screen-name">
            <Name name={name} />
            <ScreenName screen_name={screen_name} />
          </div>
          <Text text={text} />
        </div>
      </div> 
    </div>
  )
}