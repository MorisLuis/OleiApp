import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { ProductInventoryCard } from '../../components/Cards/ProductInventoryCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../theme/UI/cardsStyles';

export const Inventory = () => {

    useEffect(() => {
        console.log('Inventary');
    }, [])


    return (
        <SafeAreaView style={{
            padding: 10,
            paddingTop: 80
        }}>
            <Text style={styles.title}> Inventario </Text>

            <ProductInventoryCard />
            <ProductInventoryCard />
        </SafeAreaView>
    )
}
