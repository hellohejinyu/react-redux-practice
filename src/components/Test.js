import React from 'react'

import { useSelector } from '../react-redux'

const Cpt = () => {
  const themeColor = useSelector((state) => state.themeColor)
  return (
    <h1>themeColor: {themeColor}</h1>
  )
}

export default Cpt
