import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.heading}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>
                        What is Artificial Intelligence.
                    </Text>
                    <Image
                        source={{
                            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1744696769869/2065c117-83fd-49a2-ac76-2a846ca7108d.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3} style={{ color: '#ffffff' }}>
                            In a world where everyone is talking about AI and using various AI tools to ease and complete their daily tasks. We are using it too much now in our daily life, whether it is ChatGPT, gemini, perplexity, or any other AI tool or model.
                        </Text>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.socialLinks}
                            onPress={() => openWebsite("https://intro-to-ai.hashnode.dev/introduction-to-artificial-intelligence-machine-learning-deep-learning-and-gen-ai")}
                        >Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.socialLinks}
                            onPress={() => openWebsite("https://hashnode.com/@satyas-server")}
                        >Follow me</Text>
                    </TouchableOpacity>
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
    card: {},
    elevatedCard: {
        backgroundColor: '#044F67',
        borderRadius: 10,
        margin: 10
    },
    headingContainer: {
        alignItems: 'center'
    },
    headingText: {
        color: '#ffffff',
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3,
    },
    cardImage: {
        height: 200,
        width: 364,
        borderRadius: 2,
        marginBottom: 5
    },
    bodyContainer: {
        paddingLeft: 10,
        marginBottom: 10
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        color: '#FFFFFF',
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 7,
        marginBottom: 10,
        fontSize: 12
    },
})