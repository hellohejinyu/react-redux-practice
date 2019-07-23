import React, { Component } from 'react'
import Header from './containers/Header'
import Content from './containers/Content'
import Test from './components/Test'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
        <Test />
      </div>
    )
  }
}

export default App;
