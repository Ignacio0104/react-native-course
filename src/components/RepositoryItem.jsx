import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import StyledText from './StyledText'

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
    }
})

const RepositoryItem = (props) => {
  return (
    <View key={Math.floor(Math.random()*10000)} style={styles.container}>
        <StyledText fontWeight="bold" fontSize="subheading">Name:{props.repo.fullName}</StyledText>
        <StyledText >Description:{props.repo.description}</StyledText>
        <StyledText >language:{props.repo.language}</StyledText>
        <StyledText >Stars:{props.repo.stargazersCount}</StyledText>
        <StyledText >Forks:{props.repo.forksCount}</StyledText>
        <StyledText >Reviews: {props.repo.reviewCount}</StyledText>
        <StyledText >Rating: {props.repo.ratingAverage}</StyledText>
    </View>
  )
}

export default RepositoryItem
