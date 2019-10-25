import React from 'react'
import { connect } from 'react-redux'
import politicians from '../../constants/politicians'
import './title.css'
 
class Title extends React.Component{
  render(){  
    let selectedPoliticianName 
    try{
      selectedPoliticianName = politicians[this.props.selectedPolitician].name
    }catch (err) {
      selectedPoliticianName = ""
    }

    return(
      <div className='title'>{`Most recents tweets from ${selectedPoliticianName}`}</div>
    )
  }
}   

const mapStateToProps = state =>  ({  
  selectedPolitician : state.politician,
})

const mapDispatchToProps = dispatch => ({})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title) 