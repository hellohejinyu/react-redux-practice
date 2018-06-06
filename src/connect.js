import React, { Component } from 'react'
import { StoreContext } from './index'

const connect = (mapStateToProps, mapDispatchToProps) => (Cpt) => {
  const res = (props) => {
    return <StoreContext.Consumer>
      {
        store => {
          class Connect extends Component {
            constructor () {
              super()
              this.state = {
                allProps: {},
                listenerId: Math.floor(Math.random() * 100000000)
              }
            }
            componentWillMount() {
              this._updateProps()
              store.subscribe(() => this._updateProps(), this.state.listenerId)
            }

            componentWillUnmount() {
              store._unsafeRemoveSubscribe(this.state.listenerId)
            }

            _updateProps() {
              const stateProps = mapStateToProps ? 
              mapStateToProps(store.getState(), props) :
              {}
              const dispatchProps = mapDispatchToProps ?
              mapDispatchToProps(store.dispatch, props) :
              {}
              this.setState({
                allProps: {
                  ...stateProps,
                  ...dispatchProps,
                  ...props
                }
              })
            }
            render () {
              return <Cpt {...this.state.allProps} />
            }
          }
          return <Connect />
        }
      }
    </StoreContext.Consumer>
  }
  return res
}


export default connect