import React from 'react'
import { View, Text } from 'react-native'

const Box = (props) => {
    return (
        <View style={{flex:2, backgroundColor:props.bColor, borderRadius:10, justifyContent:'center', paddingLeft:20, marginBottom:20}}>
            <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:20}}>{props.title}</Text>
            <Text style={{color:'#FFFFFF'}}>{props.description}</Text>
        </View>
    )
}

export default Box