import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

class MessageComponents extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    )
  }
}

export default MessageComponents
