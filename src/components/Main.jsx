import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = ()=>{
    return (
        <View style={{flex:1}}>
            <AppBar></AppBar>
            <RepositoryList></RepositoryList>
        </View>
    )
}

export default Main
