import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
            <Text style={{ color: 'gray' }}>Search Icon</Text>
        </View>
    )
}

export default Header