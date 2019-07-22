import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from '../react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  componentDidUpdate () {
    console.log('update content')
  }

  render () {
    return (
      <div>
        <p>React.js 小书内容</p>
        <p>{this.props.value || 0}</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}
export default connect(mapStateToProps)(Content)