import React, { Component } from 'react'
import Wrap from './Wrap'

class Header extends Component {
  constructor () {
    super()
    this.state = { themeColor: '' }
  }
  componentWillMount() {
    const { store } = this.props
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }
  _updateThemeColor () {
    const { store } = this.props
    const state = store.getState()
    this.setState({
      themeColor: state.themeColor
    })
  }
  render () {
    return (
      <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
    )
  }
}

const WrapHeader = Wrap(Header)

export default WrapHeader