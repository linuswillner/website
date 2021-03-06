// Divider component
import React, { Component } from 'react'
import { dispatcher } from 'utils/dispatcher'

export default class Divider extends Component {
  constructor (props) {
    super(props)
    this.state = { hidden: false }
  }

  componentDidMount () {
    dispatcher.on('MENU_TOGGLE', () => {
      if (window.lowWidth) this.setState({ hidden: !this.state.hidden })
    })
  }

  render () {
    return (
      <div
        className='divider is-divider'
        style={
          this.state.hidden === true
            ? { display: 'none' }
            : {}
        }
      />
    )
  }
}
