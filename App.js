import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import WriteScreen from './WriteScreen';
import ReadScreen from './ReadScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteScreen: {screen: WriteScreen},
  ReadScreen: {screen: ReadScreen},
  });
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
