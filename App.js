import React, { Component } from 'react';
import Home from './Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {
  Stack = createStackNavigator();
  render(){
  return (
    <NavigationContainer>
      <this.Stack.Navigator screenOptions={{ header: () => null }}>
        <this.Stack.Screen name="Home" component={Home}/>
      </this.Stack.Navigator>
    </NavigationContainer>
  );
  }
};

export default App;
