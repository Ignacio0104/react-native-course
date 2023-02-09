import React from 'react'
import { StyleSheet,Text } from 'react-native'
import theme from "./Theme.js"

const styles =StyleSheet.create({
    text:{
        fontSize:12,
        color: "grey",
    },
    bold:{
        fontWeight: "bold"
    },
    blue:{
        color:"blue"
    },
    big:{
        fontSize:20
    },
    small:{
        fontSize: 10
    }
})

const stylesDos =StyleSheet.create({
    text:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    subheading:{
        fontSize: theme.fontSize.subheading
    }
})

export default function StyledText ({/*blue,bold,children,big,small*/children,color,fontSize,fontWeight,style,...restOfProps }){
    /*const textStyles=[
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]*/

    const textStylesDos=[
        styles.text,
        color === "primary" && stylesDos.colorPrimary,
        color === "secondary" && stylesDos.colorSecondary,
        fontSize=== "subheading" && stylesDos.subheading,
        fontWeight === "bold" && stylesDos.bold
    ]
    return(
        <Text style={textStylesDos} {...restOfProps}>
            {children}
        </Text>
    )
}
