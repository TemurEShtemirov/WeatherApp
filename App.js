import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
const API_KEY = '7d150e07dc68de476fca64fb5fc1b11c';

export default class App extends React.Component {

  state = {
    isLoading: true,
    temp: null,
    condition: null
  }

  getWeather = async (latitude, longitude) => {
    try {
      const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      this.setState({
        isLoading: false,
        temp: data.main.temp,
        condition: weather[0].main,

      });
      console.log(data);
    } catch (error) {
      Alert.alert(`Error fetching weather data`);
    }
  }

  getLocation = async () => {
    try {
      await Location.requestForegrounmissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
    } catch (error) {
      Alert.alert(`I Can't determine location :(`);
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
