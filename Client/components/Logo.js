import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Colors from '../constants/Colors';

export default class Logo extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width:350, height:350}}
                  source={require('../images/eat.png')} />
                <Text style={styles.logoText}>Eat Together</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width: 60,
        height: 200,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize: 20,
        color:'white',
    }
});