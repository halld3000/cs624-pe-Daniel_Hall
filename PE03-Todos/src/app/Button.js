import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({ submitTodo }) => (
    <TouchableHighlight underlayColor='#efefef'
      style={styles.button}
      onPress={submitTodo}>   
      
      <Text style={StyleSheet.submit}>
         Submit   
      </Text> 
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 170,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#666666',
        fontSize: '14'
    }
})

export default Button