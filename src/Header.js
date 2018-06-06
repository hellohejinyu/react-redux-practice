import React, { Component } from 'react'
import connect from './connect'

class Header extends Component {
  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const WrapHeader = connect(state => ({
  themeColor: state.themeColor
}))(Header)

export default WrapHeader