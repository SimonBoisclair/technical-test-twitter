import { call, put } from 'redux-saga/effects'
import api from '../../api'

export default function* getTweets(action) { 
  let payload = action.payload
  const callResponse = yield call(api.tweets.GET, action.payload)
  if(callResponse.errors.length !== 0){ 
    yield put({ type: "SELECT_POLITICIAN_FAILED", payload : {
      ...payload, 
    }})
  }else{ 
    yield put({ type: "SELECT_POLITICIAN_SUCCEEDED", payload : {
      ...payload,
      tweets : callResponse.data
    }})
  }
}