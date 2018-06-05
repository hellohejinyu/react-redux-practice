import React from 'react'
import { StoreContext } from './index'

const Wrap = (Cpt) => {
  const res = () => {
    return <StoreContext.Consumer>
      {
        store => <Cpt store={store} />
      }
    </StoreContext.Consumer>
  }
  return res
}

export default Wrap