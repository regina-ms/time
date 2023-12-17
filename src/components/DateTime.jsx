import React, { Component } from 'react'


export default class DateTime extends Component {
  render() {
    return (
        <p className="date">{this.props.date}</p>
    )
  }
}
