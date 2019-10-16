import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

class MessageComponents extends Component {
  
  render () {
    console.log("child rendering")
    return (
      <View>
        <Text>{this.props.message}</Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.props.messageFromChild(text)}/>
      </View>
    )
  }
}

export default MessageComponents
