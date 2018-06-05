import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import Wrap from './Wrap'

class Content extends Component {
  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount() {
    const { store } = this.props
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor() {
    const { store } = this.props
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render() {
    return (
      <div>
        <p style={{ color: this.state.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const WrapContent = Wrap(Content)

export default WrapContent