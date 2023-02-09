import React from "react";
import Constans from "expo-constants"
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RepositoryList from "./RepositoryList";

const Main = ()=>{
    return (
        <View style={{marginTop: Constans.statusBarHeight, flexGrow:1}}>
            <Text>Rate Repositorty Application</Text>
            <RepositoryList></RepositoryList>
        </View>
    )
}

export default Main
