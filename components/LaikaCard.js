import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../constants/colors';

const LikaCard = ({ima, title, text}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={ima} style={styles.imag} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.laikaColor,
    width: '85%',
    alignSelf: 'center',
    padding: 18,
    borderRadius: 14,
    marginVertical: 4,
  },

  imag: {
    alignSelf: 'center',
    height: 160,
    width: 120,
    borderRadius: 10,
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },

  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 4,
  },

  text: {
    color: 'white',
    fontWeight: '200',
  },
});

export default LikaCard;
