import React from 'react'
import { connect } from 'react-redux'
import Tweet from './tweet/tweet'
import './tweets.css'

class Tweets extends React.Component {
  render() {
    return (
      <div className='tweets'> 
        {this.props.tweets.map((el, id) => {
          return (
            <Tweet key={el.id} element={el}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets) 