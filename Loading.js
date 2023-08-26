import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';

const image = { uri: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }
export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Loading⛅...</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
