import React, { Component } from 'react'
import Video from './Video';

export default class VideoList extends Component {
  render() {
    return this.props.list.map(item => <Video url={item.url} date={item.date} key={item.url}/>);
  }
}
