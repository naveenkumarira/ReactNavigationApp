import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

class FlexExampleComponent extends Component {
    render() {
        return(
            <View style={styles.parentContainer}>
                <View style={styles.horizontalBarContainer}>
                    <View style={styles.horizontalBarRed}/>
                    <View style={styles.horizontalBarBlue}/>
                </View>
                <View style={styles.gridContainer}>
                    <View style={styles.gridRed}> 
                        <Text style={styles.numberText}>1</Text>
                    </View>
                    <View style={styles.gridRed}> 
                        <Text style={styles.numberText}>2</Text>
                    </View>
                    <View style={styles.gridRed}> 
                        <Text style={styles.numberText}>3</Text>
                    </View>
                    <View style={styles.gridRed}> 
                        <Text style={styles.numberText}>4</Text>
                    </View>
                </View>
                <View style={styles.bottomButton}>
                    <View style={styles.smallBoxBlue}/>
                    <View style={styles.smallBoxBlue}/>
                    <View style={styles.smallBoxBlue}/>
                    <View style={styles.smallBoxBlue}/>
                </View>
            </View>
        )
    }
}

export default FlexExampleComponent

const styles = StyleSheet.create({
    parentContainer: {
        flex:1,
        flexDirection:"column",
    },
    horizontalBarContainer: {
        flex:1,
        padding: 45,
        justifyContent:"center",
        backgroundColor: "skyblue"

    },
    horizontalBarRed:{
        alignItems:"stretch",
        height:50,
        marginBottom:20,
        backgroundColor: 'red'
    },
    horizontalBarBlue:{
        alignItems:"stretch",
        height:50,
        marginBottom:20,
        backgroundColor: 'blue'
    },
    gridContainer:{
        flex:3,
        flexDirection:"row",
        backgroundColor:'yellow',
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
        margin:10
    },
    gridRed:{
        backgroundColor:"red",
        height:100,
        width:130,
        margin:20
    },
    bottomButton: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    smallBoxBlue: {
        backgroundColor:"blue",
        height:50,
        width:60,
        flexWrap:"wrap",
        marginEnd:20,
        alignItems:"center"

    },
    numberText: {
        textAlign:"center",
        fontWeight:"bold",
        color:"blue",
        fontSize:50,
    }
}) 