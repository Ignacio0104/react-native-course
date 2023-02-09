import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import RepositoryStats from './RepositoryStats'
import StyledText from './StyledText'
import theme from './Theme'

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    strong:{
        color: "#09f",
        fontWeight: " bold",
        marginEnd: 5
    },
    language:{
      padding:4,
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: "flex-start",
      borderRadius:4,
      overflow: "hidden"
    },
    image:{
      width:48,
      height: 48,
      borderRadius: 4
    }
})

const RepositoryItemHeader = (props)=>(
  <View style={{flexDirection: "row", paddingBottom: 2}}>
  <View style={{flex:0,paddingRight:10}}>
   <Image style={styles.image} source={{uri: props.repo.ownerAvatarUrl}}></Image>
  </View>
    <View style={{flex:1}}>
      <StyledText fontWeight="bold" fontSize="subheading">Name:{props.repo.fullName}</StyledText>
      <StyledText >Description:{props.repo.description}</StyledText>
      <StyledText style={styles.language} >{props.repo.language}</StyledText>
    </View>
  </View>
)



const RepositoryItem = (props) => {
  return (
    <View key={Math.floor(Math.random()*10000)} style={styles.container}>
        <RepositoryItemHeader {...props}></RepositoryItemHeader>
        <RepositoryStats {...props}></RepositoryStats>
    </View>
  )
}

export default RepositoryItem
