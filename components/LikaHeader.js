import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Special from './SpecialText';

const LikaHeader = () => {
  return (
    <>
      {/* //TITLE */}
      <Image
        source={require('../assets/arrow_down.png')}
        style={styles.arrowTransform}
      />
      <View style={styles.headerContainer}>
        <View></View>
        <View style={styles.title}>
          <Text style={styles.textTitle}>
            LAIKA <Special>Member</Special>
          </Text>
        </View>

        <Text style={styles.headerText}>
          Conviertete en miembro, recibe beneficios exclusicos y dale lo mejor a
          tu mascota.
        </Text>
      </View>
      {/* IMAGE */}
      <View>
        <Image
          source={require('../assets/card_member.png')}
          style={styles.imageCard}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  arrowTransform: {
    transform: [{rotate: '90deg'}],
    marginTop: 15,
    marginLeft: 15,
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

export default LikaHeader;
