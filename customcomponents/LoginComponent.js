import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class LoginComponent extends Component {
render() {
    return (
        <View style={styles.parentContainer}>
<View style={styles.innner_parentContainer1}>
    
    <View style={styles.childContainer}>
        <Text style={styles.textContainer}> 1</Text>
    </View>

    <View style={styles.childContainer}>
    <Text style={styles.textContainer}>2</Text>
    </View>
    
    <View style={styles.childContainer}>
    <Text style={styles.textContainer}>3</Text>
    </View>
    </View>
    <View style={styles.childContainer}>
    <Text style={styles.textContainer}>End</Text>
    </View>
    
    <View style={styles.profileContainer}>
        <View style={styles.avatar}></View>
        <View style={styles.profileTextDetailContainer}>
        <Text style={styles.profileText}> Name of the person</Text>
        <Text style={styles.profileText}> EmailID@demo.com</Text>
        </View>
    </View>
    
    </View>
    )
}
}

const styles = StyleSheet.create({
    parentContainer: {
        flex:1,
        flexDirection:"column",
        backgroundColor: 'red',
        justifyContent:'center'
    },
    innner_parentContainer1: {
        flexDirection:'row',
        backgroundColor: 'red',
        justifyContent:'space-evenly'
    },
    childContainer: {
        backgroundColor: 'yellow',
        justifyContent:"center",
        margin: 10,
        padding: 20,
        fontSize: 30
    },
    textContainer: {
        fontWeight: 'bold',
        color: 'red',
        justifyContent:"center"
    },
    bottomContainer: {
        fontWeight: 'bold',
        color: 'red',
        justifyContent:'flex-end'

    },
    profileContainer: {
        flex:1,
        backgroundColor:'green',
        justifyContent:"flex-start",
        flexDirection:"column",
        height:"20%",
        width:"100%"
    },
    avatar: {
        height:50,
        width:50,
        margin: 10,
        padding: 20,
        backgroundColor:'blue'
    },
    profileTextDetailContainer: {
        flex:1,
        flexDirection:"column",
        alignItems:"flex-start",
        margin: 10,
        padding: 20,
    },
    profileText: {
        fontWeight: 'bold',
        margin: 10,
        padding: 20
    }

  });

  

export default LoginComponent