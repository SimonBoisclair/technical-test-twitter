import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading?"LOADING...":""}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading) 