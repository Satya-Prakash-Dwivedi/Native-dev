import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.heading}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>🖤</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    heading: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '400',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    container: {
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: '#AE4572',
        shadowOpacity: 1,
        shadowRadius: 2
    }
})