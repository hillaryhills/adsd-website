import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Navbar from './TopNav/Navbar'
import Footer from './Footer/index'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    )
  }
}

export default Template
