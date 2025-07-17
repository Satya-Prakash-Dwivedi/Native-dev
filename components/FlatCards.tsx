import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.heading}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.text}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.text}>Blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '400',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    text: {
        color: '#FFFFFF',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#FF0000'
    },
    cardTwo: {
        backgroundColor: '#00FF00'
    },
    cardThree: {
        backgroundColor: '#0000FF'
    }

})