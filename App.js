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
  StyleSheet,
  Text
} from 'react-native'
import MemeListComponent from './customcomponents/MemeListComponent'
class App extends Component {
render() {
  return (
    <MemeListComponent />
  )
}
}

export default App 