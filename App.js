/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import MessageComponents from './customcomponents/MessageComponents'
class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: 'Default message need to be changed'
    }
    
  }

  sendMessage = (msg) => {
    this.setState({
      message: msg
    })
  }
  
  render () {
    console.log("Rendering")
    return (
      <View>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.sendMessage(text)}
    />
    <MessageComponents style = {styles.bigBlue} message={this.state.message} />
      </View>
    )
  }

  componentDidMount() {
    console.log("Mounted")
  }
  
}

export default App 

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red',
  },
});
