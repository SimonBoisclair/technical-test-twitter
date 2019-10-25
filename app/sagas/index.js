import 'babel-polyfill'
import { takeEvery } from 'redux-saga/effects' 
import tweets from './tweets'

function* mySaga() {
  yield takeEvery("SELECT_POLITICIAN_REQUESTED", tweets.GET)
}

export default mySaga