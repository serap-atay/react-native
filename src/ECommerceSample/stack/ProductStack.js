import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import ProductDetail from '../screen/ProductTab/ProductDetail';
import ProductList from '../screen/ProductTab/ProductList';

const ProductsScreen = () => {

    const ProductStack = createNativeStackNavigator();

    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="ProductList" component={ProductList} />
            <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
        </ProductStack.Navigator>
    )
}

export default ProductsScreen