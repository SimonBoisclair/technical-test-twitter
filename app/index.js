import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import saga from './sagas'

import reducers from './reducers'
import App from './components/app'

import './index.css'

let sagaMiddleWare = createSagaMiddleWare()
const store = createStore(reducers, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(saga)

class Root extends React.Component {  
  render() { 
    return (
      <div className='root'>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('app'))