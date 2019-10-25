import React from 'react'

import Title from './title/title'
import Toggler from './toggler/toggler'
import Tweets from './tweets/tweets'
import Loading from './loading/loading'
import Errors from './errors/errors' 

export default (props) => { 
  return ( 
    <div>
      <Title />
      <Loading />
      <Errors /> 
      <Toggler />
      <Tweets />
    </div> 
  )
}