import React, { Component } from 'react'

const StoreContext = React.createContext({})

const Provider = ({ store, children }) => (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
)

function createStore(reducer) {
  let state = null
  let listeners = []
  const subscribe = (listener, id) => {
    listeners.push({ listener, id })
  }
  const _unsafeRemoveSubscribe = (id) => {
    listeners = listeners.filter(i => i.id !== id)
  }
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener.listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe, _unsafeRemoveSubscribe }
}

const connect = (mapStateToProps, mapDispatchToProps) => (Cpt) => {
  const res = (props) => {
    return <StoreContext.Consumer>
      {
        store => {
          class Connect extends Component {
            constructor() {
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
            render() {
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


export {
  connect,
  createStore,
  Provider
}