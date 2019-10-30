import React, { Component } from 'react'
import {View, FlatList, StyleSheet, Text, ActivityIndicator, Dimensions, Image } from 'react-native';

class MemeListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
        console.log("constructor called")
        
    }

    componentDidMount() {
        console.log("componentDidMount called")
        return fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson.data.memes,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
   
    }

    render() {
        console.log("render called")
            if(this.state.isLoading) {
                return(
                  <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                  </View>
                )
              }

                return(
                    <View style={{flex: 1, paddingTop:20}}>
                        <FlatList
                                data={this.state.dataSource}
                                renderItem={({item}) => <Image
                                style={{width:"100%", aspectRatio:1.77}}
                                source={{uri: item.url}}
                              />}
                                keyExtractor={({id}, index) => id}
                        />
                    </View>
              )
    } 
}

function Item({ title }) {
    return ( 
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export default MemeListComponent