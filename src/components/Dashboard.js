import React from 'react';
import Pet from './Pet'
import {connect} from 'react-redux'
import {fetchDog,fetchCat} from '../actions'

class Dashboard extends React.Component {

componentDidMount(){
  this.props.dispatch(fetchCat())
  this.props.dispatch(fetchDog())
}

  render() {
    return (
      <div>
        <Pet catToAdopt={this.props.cat}/>
        <Pet dogToAdopt={this.props.dog}/>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  dog:state.dog,
  cat:state.cat
})

export default connect(mapStateToProps)(Dashboard)