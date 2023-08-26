import React from "react";
import PropTypes from 'prop-types'; 
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#141E30", "#243B55"],
        title:"Sit at home 🏠",
        subTitle:"Do you see what's on the street?"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#3a7bd5", "#3a6973"],
        title:"Take an umbrella ☔",
        subTitle:"Perhaps the rain will soon increase !"
    },
    Rain: {
        iconName: 'rainy',
        gradient: ['#83a4d4', '#b6fbff'],
        title:"On the street Rain 🌧️",
        subTitle:"S soon there will be a rainbow !"

    },
    Snow: {
        iconName: 'snow',
        gradient: ['#83a4d4', '#b6fbff'],
        title:'Snowball outside !',
        subTitle:'Dress warmly , make snowmen :)'
    },
    Smoke: {
        iconName: "weather-windy",
        gradient: ["#56CCF2", "#280ED"],
        title:"Has Street Soft",
        subTitle:"I do not advise you to gow out  without"
    },
    Clear: {
        iconName: "weather-hazy",
        gradient: ["#56CCF2", "#2F80ED"],
        title:"The weather is super :)",
        subTitle:"Go for a walk, enough sitting at home!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#757F9A", "#D7DDE8"],
        title:"Clouds",
        subTitle:"White Horses 🐎"
    },

}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle={"light-content"} />
         
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
                <Text style={styles.text}>{temp}</Text>

            </View>

            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <View>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
                </View>


            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Smoke", "Clear", "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 54,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "400",
        marginBottom: 10

    },
    subTitle: {
        color: 'white',
        fontWeight: "700",
        fontSize: 34

    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
});