import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View, Animated} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';

import colors from './constants/colors';

import LikaHeader from './components/LikaHeader';
import BigCard from './components/BigCart/BigCard';
import LaikaSavings from './components/LaikaSavings';
import Experiences from './components/Experiences';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <ScrollView>
          <LikaHeader />

          <BigCard />

          <LaikaSavings />

          <Experiences />
        </ScrollView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: colors.slatePurple,
  },

  headerContainer: {
    marginTop: 16,
    marginBottom: 40,
    width: '70%',
    alignSelf: 'center',
  },

  title: {
    alignItems: 'center',
    margin: 18,
  },

  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },

  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
    alignSelf: 'center',
  },

  imageCard: {
    alignSelf: 'center',
    width: '70%',
    height: 170,
    resizeMode: 'stretch',
  },
});

export default App;
