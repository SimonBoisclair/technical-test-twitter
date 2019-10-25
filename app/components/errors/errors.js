import React from 'react'
import { connect } from 'react-redux'

class Errors extends React.Component {
  render() {
    return (
      <div> 
        {this.props.errors}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors) 