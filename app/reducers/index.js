import { combineReducers } from 'redux' 

import politician from './politician'
import tweets from './tweets'
import loading from './loading'
import errors from './errors'

var reducers = combineReducers({ 
  politician,
  tweets,
  loading,
  errors
})

export default reducers