import React, {Component} from 'react'
import { View,
StyleSheet,
Button,
Text, Dimensions } from 'react-native'

const {width,height} = Dimensions.get("window")

class UpdateScreenComponent extends Component {

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.innerContainer}>
                <View>
                    <View style={styles.image} />
                </View>
                
                <View>
                    <Text style={styles.titleText}>Important Update Required</Text>
                </View>
                
                <View>
                    <Text style={styles.descriptionText}> To continue, please update the Chennai News app. This should only take a few moments.</Text>
                </View>
                </View>
                <View style={styles.buttonStyle}>
                    <Button style={styles.buttonSize} title="Update now" />
                </View>
            </View>
        )
    }
}

export default UpdateScreenComponent

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column"
    },
    innerContainer: {
        flex:1,
        alignItems:"center",
        flexDirection: "column",
    },
    image: {
        height: 250/width * width,
        width: 320/width * width,
        marginTop:45,
        marginBottom: 21,
        backgroundColor:'deepskyblue'
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 21,
        textAlign:'center',
        marginBottom: 11,
    }, 
    descriptionText:{
        fontWeight: 'normal',
        fontSize: 16,
        width: 306,
        textAlign:"center"
    },
    buttonStyle:{
        alignItems:"stretch",
        marginBottom:91,
        marginStart: 45,
        marginEnd: 45,
        height:100,
        width:undefined
    },
    buttonSize: {
        height:100
    }

})

