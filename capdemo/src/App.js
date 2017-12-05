import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'
import Header from './Header.js'
import List from './List.js'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <Header />
          <List />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
