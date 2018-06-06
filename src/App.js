import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'

class App extends Component {
  render () {
    return (
      <div>
        <Header name='头部' />
        <Content name='内容' />
      </div>
    )
  }
}

export default App;
