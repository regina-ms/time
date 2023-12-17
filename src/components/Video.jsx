import React, { Component } from 'react'
import DateTime from './DateTime'
import { withDetails } from './withDetails'

const DateTimePretty = withDetails(DateTime);

export default class Video extends Component {
  render() {
    return (
        <div className="video">
        <iframe src={this.props.url}  allow="autoplay; encrypted-media" allowFullScreen title={this.props.url}></iframe>
        <DateTimePretty date={this.props.date} />
    </div>
    )
  }
}
