import { View, Text ,Image, ScrollView, FlatList, SectionList } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './component/AppBar'
import HeaderAvatar from './component/header'
import Body from './component/Body'

//Function component : la 1 ham co gia tri tra ve la 1 giao dien
//Function ko co state
export default function NewFeed() {
  //Xu ly logic code
 


  return (
    <View style={styles.container}>
      <AppBar title="Feed" />
      <HeaderAvatar />
      <Body />
    </View>
  )
}