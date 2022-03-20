import React from 'react'
import { View, Text } from 'react-native'

const HeaderTitle = () => {
    return (
        <View style={{ flex: 2}}>
            <Text style={{ fontWeight:'bold', fontSize:40 }}>Learn</Text>
            <Text style={{ color: 'gray' }}>Choose the part of the body</Text>
        </View>
    )
}

export default HeaderTitle