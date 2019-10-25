import 'babel-polyfill'
import { takeLatest } from 'redux-saga/effects' 
import tweets from './tweets'

function* mySaga() {
  yield takeLatest("SELECT_POLITICIAN_REQUESTED", tweets.GET)
}

export default mySaga