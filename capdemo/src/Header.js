import React, { Component } from 'react'
import hero from './Site_Social_image.jpg'

// import logo from './logo.png'

// import './App.css'

class Header extends Component {
  render () {
    return (
      <div className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' />
        <p className='App-title'>Dream Act Today!</p> */}
        <img src={hero} className='Hero' alt='Dream Act Now. Demand It. No compromises.' />
      </div>
    )
  }
}

export default Header
