import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Card} from 'react-native-elements';

class Promotions extends Component {
  render() {
    return (
      <View>
        <View style={styles.titles}>
          <Text style={styles.title}>Jusqu'à -50%</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingBottom: 10, paddingLeft: 10}}>
          <Card containerStyle={styles.bigCard}>
            <ImageBackground
              source={{
                uri: 'https://media.vogue.fr/photos/5ecb8735877822cdea1d105a/2:3/w_2560%2Cc_limit/Bouillon%2520Service%2520_%25C2%25A9Benoit%2520Linero%2520(3).jpg',
              }}
              style={styles.imgBigCard}
              resizeMode="cover">
              <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#00c2b3',
                    width: 120,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 6},
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <Text style={styles.promotion}>-30%</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    borderRadius: 25,
                    backgroundColor: 'white',
                    width: 75,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 6},
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <Text style={styles.time}>10-15 min</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
              <Text style={styles.titleBigCard}>🌭 Bouillons Services !</Text>
              <Text style={styles.categoryTitleBigCard}>
                Soupe . Pâtes . Équilibré
              </Text>
              <Text style={styles.evalBigCard}>⭐️ 4.7 Excellent</Text>
              <Text style={styles.likeBigCard}>🥰 500 personnes ont aimé</Text>
              <Text style={styles.kmBigCard}>
                📍 à 1.4 km . 3.49 € de livraison
              </Text>
            </View>
          </Card>
          <Card containerStyle={styles.bigCard}>
            <ImageBackground
              source={{
                uri: 'https://static.lexpress.fr/medias_10383/w_1811,h_1359,c_crop,x_222,y_0/w_640,h_358,c_fill,g_center/v1428482719/bibimbap-plat-typique-coreen_5316341.jpg',
              }}
              style={styles.imgBigCard}
              resizeMode="cover">
              <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#00c2b3',
                    width: 120,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 6},
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <Text style={styles.promotion}>-50%</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    borderRadius: 25,
                    backgroundColor: 'white',
                    width: 75,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 6},
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <Text style={styles.time}>15-25 min</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
              <Text style={styles.titleBigCard}>👨🏻‍🍳 Pierre Sang - Express</Text>
              <Text style={styles.categoryTitleBigCard}>
                Coréen . Asiatique . Desserts . Salades
              </Text>
              <Text style={styles.evalBigCard}>⭐️ 4.8 Excellent</Text>
              <Text style={styles.likeBigCard}>🥰 500 personnes ont aimé</Text>
              <Text style={styles.kmBigCard}>
                📍 à 1.7 km . 3.49 € de livraison
              </Text>
            </View>
          </Card>
          <Card containerStyle={styles.bigCard}>
            <ImageBackground
              source={{
                uri: 'https://www.discoverwalks.com/blog/wp-content/uploads/2018/03/everythingyouneedtoknowaboutparisiansandwichshops5-816x408.jpg',
              }}
              style={styles.imgBigCard}
              resizeMode="cover">
              <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#00c2b3',
                    width: 120,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 6},
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <Text style={styles.promotion}>-30%</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    borderRadius: 25,
                    backgroundColor: 'white',
                    width: 75,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 6},
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <Text style={styles.time}>15-25 min</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
              <Text style={styles.titleBigCard}>🇮🇹 Novettino</Text>
              <Text style={styles.categoryTitleBigCard}>
                Italien . Sandwichs . Desserts . Edenred
              </Text>
              <Text style={styles.evalBigCard}>⭐️ 4.7 Excellent</Text>
              <Text style={styles.likeBigCard}>🥰 58 personnes ont aimé</Text>
              <Text style={styles.kmBigCard}>
                📍 à 1.7 km . 3.49 € de livraison
              </Text>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 10,
  },
  titles: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  bigCard: {
    width: 320,
    height: 320,
    borderWidth: 0,
    padding: 0,
    borderRadius: 10,
    margin: 5,
  },
  imgBigCard: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 'auto',
    textAlign: 'center',
  },
  titleBigCard: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
  },
  categoryTitleBigCard: {
    fontStyle: 'italic',
    fontSize: 16,
    paddingLeft: 10,
  },
  evalBigCard: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#d9534f',
  },
  likeBigCard: {
    fontSize: 16,
    paddingLeft: 10,
  },
  promoBigCard: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#d9534f',
  },
  kmBigCard: {
    color: 'gray',
    fontSize: 16,
    paddingLeft: 10,
  },
  time: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  promotion: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#d9534f',
  },
});

export default Promotions;
