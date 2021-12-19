import React, {Component} from 'react';

import {ScrollView, StyleSheet, View, Animated, Image} from 'react-native';

import Header from '../Components/Header';
import Categories from '../Components/Categories';
import Exclusive from '../Components/Exclusive';
import News from '../Components/News';
import Promotions from '../Components/Promotions';
import Promotions2 from '../Components/Promotions2';

class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <View style={{height: '80%'}}>
          <ScrollView>
            <Categories />
            <Promotions />
            <View style={{paddingBottom: 10}}>
              <News />
              <Exclusive />
              <Promotions2 />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
  },
});

export default Home;
