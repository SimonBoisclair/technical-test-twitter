import React from 'react'
import { connect } from 'react-redux'
import politicians from '../../constants/politicians'
import { selectPolitician } from '../../actions/index'
import Button from './button/button'
import './toggler.css'

class Tweets extends React.Component {

  componentDidMount() {
    try {
      this.props.selectPolitician({
        twitterAccountName: Object.entries(politicians)[0][0],
        name: Object.entries(politicians)[0][1].name,
      })
    } catch (err) {  }
  }

  render() {
    return (
      <div className='toggler-container'>
        {
          Object.entries(politicians).map((el, id) => {
            return (
              <Button {...this.props} element={el} key={id} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedPolitician: state.politician
})

const mapDispatchToProps = dispatch => ({
  selectPolitician: politicianId => dispatch(selectPolitician(politicianId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets) 