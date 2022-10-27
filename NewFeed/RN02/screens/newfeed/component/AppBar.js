import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function AppBar(props) {
  return (
    <View style ={styles.header}>
              <Image style={styles.icon} source ={require("../../../assets/camera.png")}/>
              <Text style={styles.header__title}>{props.title}</Text>
              <Image style={styles.icon} source ={require("../../../assets/pen.png")}/>
          </View>
  )
}